const THEME_KEY='kkf_theme';
const STATE_KEY='kkf_demo_state';
const USER_KEY='kkf_demo_user';

function setTheme(){
  document.documentElement.classList.toggle('dark',localStorage.getItem(THEME_KEY)==='dark');
}
function toggleTheme(){
  localStorage.setItem(THEME_KEY,localStorage.getItem(THEME_KEY)==='dark'?'light':'dark');
  setTheme();
}
setTheme();

function demoPassword(name){return name+String.fromCharCode(64)+'123';}

async function loadBaseData(){
  const [usersResponse,financeResponse]=await Promise.all([
    fetch('data/users.json',{cache:'no-store'}),
    fetch('data/finance.json',{cache:'no-store'})
  ]);
  if(!usersResponse.ok||!financeResponse.ok)throw new Error('Demo data could not be loaded');
  return {users:await usersResponse.json(),finance:await financeResponse.json()};
}

async function loadDemoData(){
  const base=await loadBaseData();
  try{
    const saved=JSON.parse(localStorage.getItem(STATE_KEY)||'null');
    if(!saved)return base;
    return {users:saved.users||base.users,finance:saved.finance||base.finance};
  }catch{
    localStorage.removeItem(STATE_KEY);
    return base;
  }
}

function saveDemoData(data){localStorage.setItem(STATE_KEY,JSON.stringify(data));}
function resetDemoData(){localStorage.removeItem(STATE_KEY);location.reload();}

function currentUser(){
  try{return JSON.parse(localStorage.getItem(USER_KEY)||'null');}
  catch{localStorage.removeItem(USER_KEY);return null;}
}

function escapeHTML(value){
  return String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}

function positiveAmount(value){
  const amount=Number(value);
  return Number.isFinite(amount)&&amount>0?amount:0;
}

async function login(){
  const name=document.querySelector('#name').value.trim();
  const password=document.querySelector('#password').value;
  const error=document.querySelector('#error');
  error.textContent='';
  try{
    const data=await loadDemoData();
    const all=[...(data.users.members||[]),...(data.users.managers||[])];
    const user=all.find(u=>u.active&&u.name.toLowerCase()===name.toLowerCase()&&(password===(u.password||demoPassword(u.name))));
    if(!user)throw new Error('Invalid login details');
    localStorage.setItem(USER_KEY,JSON.stringify(user));
    location.href=user.role==='manager'?'demo-manager.html':'demo-member.html';
  }catch(e){error.textContent=e.message||'Login failed';}
}

function logout(){localStorage.removeItem(USER_KEY);location.href='demo-login.html';}

function toggleSignup(){
  const panel=document.querySelector('#signupPanel');
  if(!panel)return;
  const open=panel.hidden;
  panel.hidden=!open;
  if(open)document.querySelector('#signupName')?.focus();
}

async function signup(){
  const name=(document.querySelector('#signupName')?.value||'').trim();
  const password=document.querySelector('#signupPassword')?.value||'';
  const confirm=document.querySelector('#signupConfirm')?.value||'';
  const error=document.querySelector('#signupError');
  const success=document.querySelector('#signupSuccess');
  if(error)error.textContent='';
  if(success)success.textContent='';
  if(name.length<2){if(error)error.textContent='Please enter your name.';return;}
  if(password.length<4){if(error)error.textContent='Password must be at least 4 characters.';return;}
  if(password!==confirm){if(error)error.textContent='Passwords do not match.';return;}
  try{
    const data=await loadDemoData();
    data.users.members=data.users.members||[];
    const all=[...(data.users.members||[]),...(data.users.managers||[])];
    if(all.some(u=>u.name.toLowerCase()===name.toLowerCase())){if(error)error.textContent='An account with this name already exists.';return;}
    const maxId=data.users.members.reduce((max,u)=>Math.max(max,parseInt(String(u.id).replace(/\D/g,''),10)||0),0);
    const id='M'+String(maxId+1).padStart(3,'0');
    data.users.members.push({id,name,password,role:'member',active:true});
    saveDemoData(data);
    document.querySelector('#signupName').value='';
    document.querySelector('#signupPassword').value='';
    document.querySelector('#signupConfirm').value='';
    if(success)success.textContent='Account created. You can now sign in.';
  }catch(e){if(error)error.textContent=e.message||'Sign up failed';}
}

async function addDemoMember(){
  const input=document.querySelector('#new-member-name');
  const error=document.querySelector('#member-error');
  const name=(input?.value||'').trim();
  if(!name){if(error)error.textContent='Enter a member name.';return;}
  const data=await loadDemoData();
  const all=[...(data.users.members||[]),...(data.users.managers||[])];
  if(all.some(u=>u.name.toLowerCase()===name.toLowerCase())){if(error)error.textContent='This name already exists.';return;}
  const maxId=data.users.members.reduce((max,u)=>Math.max(max,parseInt(String(u.id).replace(/\D/g,''),10)||0),0);
  const id='M'+String(maxId+1).padStart(3,'0');
  data.users.members.push({id,name,role:'member',active:true});
  saveDemoData(data);
  input.value='';
  if(error)error.textContent='Member added. Demo password: '+demoPassword(name);
  renderManager();
}

async function addCollection(){
  const amount=positiveAmount(document.querySelector('#collection-amount')?.value);
  if(!amount)return;
  const data=await loadDemoData();
  data.finance.summary.totalCollection=Number(data.finance.summary.totalCollection||0)+amount;
  saveDemoData(data);
  document.querySelector('#collection-amount').value='';
  renderManager();
}

async function addExpense(){
  const title=(document.querySelector('#expense-title')?.value||'').trim();
  const amount=positiveAmount(document.querySelector('#expense-amount')?.value);
  if(!title||!amount)return;
  const data=await loadDemoData();
  data.finance.expenses=data.finance.expenses||[];
  data.finance.expenses.unshift({date:new Date().toISOString().slice(0,10),title,amount});
  data.finance.summary.totalExpense=Number(data.finance.summary.totalExpense||0)+amount;
  saveDemoData(data);
  document.querySelector('#expense-title').value='';
  document.querySelector('#expense-amount').value='';
  renderManager();
}

function formatINR(amount){
  return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(Number(amount)||0);
}

async function renderMember(){
  const user=currentUser();
  if(!user||user.role!=='member'){location.href='demo-login.html';return;}
  document.querySelector('#welcome').textContent='Welcome, '+user.name;
  const data=await loadDemoData();
  const collection=Number(data.finance.summary.totalCollection||0),expense=Number(data.finance.summary.totalExpense||0);
  document.querySelector('#collection').textContent=formatINR(collection);
  document.querySelector('#expense').textContent=formatINR(expense);
  document.querySelector('#balance').textContent=formatINR(collection-expense);
  document.querySelector('#rows').innerHTML=(data.finance.expenses||[]).map(x=>`<tr><td>${escapeHTML(x.date)}</td><td>${escapeHTML(x.title)}</td><td>${formatINR(x.amount)}</td></tr>`).join('');
}

async function renderManager(){
  const user=currentUser();
  if(!user||user.role!=='manager'){location.href='demo-login.html';return;}
  document.querySelector('#welcome').textContent='Welcome, '+user.name;
  const data=await loadDemoData();
  const collection=Number(data.finance.summary.totalCollection||0),expense=Number(data.finance.summary.totalExpense||0);
  document.querySelector('#members').innerHTML=(data.users.members||[]).map(x=>`<li>${escapeHTML(x.name)} <small>(${escapeHTML(x.id)})</small></li>`).join('');
  document.querySelector('#collection').textContent=formatINR(collection);
  document.querySelector('#expense').textContent=formatINR(expense);
}

window.addEventListener('DOMContentLoaded',()=>setTheme());
