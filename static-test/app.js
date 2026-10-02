const THEME_KEY='kkf_theme';
const STATE_KEY='kkf_demo_state';

function setTheme(){document.documentElement.classList.toggle('dark',localStorage.getItem(THEME_KEY)==='dark');}
function toggleTheme(){localStorage.setItem(THEME_KEY,localStorage.getItem(THEME_KEY)==='dark'?'light':'dark');setTheme();}
setTheme();

function demoPassword(name){return name+String.fromCharCode(64)+'123';}

async function loadBaseData(){
  const [usersResponse,financeResponse]=await Promise.all([fetch('data/users.json'),fetch('data/finance.json')]);
  if(!usersResponse.ok||!financeResponse.ok)throw new Error('Demo data could not be loaded');
  return {users:await usersResponse.json(),finance:await financeResponse.json()};
}

async function loadDemoData(){
  const base=await loadBaseData();
  const saved=JSON.parse(localStorage.getItem(STATE_KEY)||'null');
  if(!saved)return base;
  return {users:saved.users||base.users,finance:saved.finance||base.finance};
}

function saveDemoData(data){localStorage.setItem(STATE_KEY,JSON.stringify(data));}
function resetDemoData(){localStorage.removeItem(STATE_KEY);location.reload();}

async function login(){
  const name=document.querySelector('#name').value.trim();
  const password=document.querySelector('#password').value;
  const error=document.querySelector('#error');
  error.textContent='';
  try{
    const data=await loadDemoData();
    const all=[...(data.users.members||[]),...(data.users.managers||[])];
    const user=all.find(u=>u.active&&u.name.toLowerCase()===name.toLowerCase()&&password===demoPassword(u.name));
    if(!user)throw new Error('Invalid demo login');
    localStorage.setItem('kkf_demo_user',JSON.stringify(user));
    location.href=user.role==='manager'?'demo-manager.html':'demo-member.html';
  }catch(e){error.textContent=e.message||'Login failed';}
}

function logout(){localStorage.removeItem('kkf_demo_user');location.href='demo-login.html';}
function currentUser(){return JSON.parse(localStorage.getItem('kkf_demo_user')||'null');}

async function addDemoMember(){
  const input=document.querySelector('#new-member-name');
  const error=document.querySelector('#member-error');
  const name=(input?.value||'').trim();
  if(!name){if(error)error.textContent='Enter a member name.';return;}
  const data=await loadDemoData();
  if([...data.users.members,...data.users.managers].some(u=>u.name.toLowerCase()===name.toLowerCase())){if(error)error.textContent='This name already exists.';return;}
  const id='M'+String(data.users.members.length+1).padStart(3,'0');
  data.users.members.push({id,name,role:'member',active:true});
  saveDemoData(data);input.value='';if(error)error.textContent='Member added. Demo password: '+demoPassword(name);renderManager();
}

async function addCollection(){
  const amount=Number(document.querySelector('#collection-amount')?.value||0);
  if(!amount||amount<=0)return;
  const data=await loadDemoData();
  data.finance.summary.totalCollection=Number(data.finance.summary.totalCollection||0)+amount;
  saveDemoData(data);document.querySelector('#collection-amount').value='';renderManager();
}

async function addExpense(){
  const title=(document.querySelector('#expense-title')?.value||'').trim();
  const amount=Number(document.querySelector('#expense-amount')?.value||0);
  if(!title||!amount||amount<=0)return;
  const data=await loadDemoData();
  data.finance.expenses=data.finance.expenses||[];
  data.finance.expenses.unshift({date:new Date().toISOString().slice(0,10),title,amount});
  data.finance.summary.totalExpense=Number(data.finance.summary.totalExpense||0)+amount;
  saveDemoData(data);document.querySelector('#expense-title').value='';document.querySelector('#expense-amount').value='';renderManager();
}

async function renderMember(){
  const user=currentUser();
  if(!user||user.role!=='member'){location.href='demo-login.html';return;}
  document.querySelector('#welcome').textContent='Welcome, '+user.name;
  const data=await loadDemoData();
  const collection=Number(data.finance.summary.totalCollection||0),expense=Number(data.finance.summary.totalExpense||0);
  document.querySelector('#collection').textContent=new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(collection);
  document.querySelector('#expense').textContent=new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(expense);
  document.querySelector('#balance').textContent=new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR'}).format(collection-expense);
  document.querySelector('#rows').innerHTML=(data.finance.expenses||[]).map(x=>'<tr><td>'+x.date+'</td><td>'+x.title+'</td><td>₹'+Number(x.amount).toLocaleString('en-IN')+'</td></tr>').join('');
}

async function renderManager(){
  const user=currentUser();
  if(!user||user.role!=='manager'){location.href='demo-login.html';return;}
  document.querySelector('#welcome').textContent='Welcome, '+user.name;
  const data=await loadDemoData();
  const collection=Number(data.finance.summary.totalCollection||0),expense=Number(data.finance.summary.totalExpense||0);
  document.querySelector('#members').innerHTML=(data.users.members||[]).map(x=>'<li>'+x.name+' <small>('+x.id+')</small></li>').join('');
  document.querySelector('#collection').textContent='₹'+collection.toLocaleString('en-IN');
  document.querySelector('#expense').textContent='₹'+expense.toLocaleString('en-IN');
}

window.addEventListener('DOMContentLoaded',()=>{setTheme();});
