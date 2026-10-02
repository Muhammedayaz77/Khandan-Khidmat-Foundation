const THEME_KEY='kkf_theme';
function setTheme(){document.documentElement.classList.toggle('dark',localStorage.getItem(THEME_KEY)==='dark');}
function toggleTheme(){localStorage.setItem(THEME_KEY,localStorage.getItem(THEME_KEY)==='dark'?'light':'dark');setTheme();}
setTheme();
function demoPassword(name){return name+String.fromCharCode(64)+'123';}
async function loadUsers(){const r=await fetch('data/users.json');return r.json();}
async function login(){const name=document.querySelector('#name').value.trim();const password=document.querySelector('#password').value;const error=document.querySelector('#error');error.textContent='';try{const data=await loadUsers();const all=[...data.members,...data.managers];const user=all.find(u=>u.active&&u.name.toLowerCase()===name.toLowerCase()&&password===demoPassword(u.name));if(!user)throw new Error('Invalid demo login');localStorage.setItem('kkf_demo_user',JSON.stringify(user));location.href=user.role==='manager'?'demo-manager.html':'demo-member.html';}catch(e){error.textContent=e.message||'Login failed';}}
function logout(){localStorage.removeItem('kkf_demo_user');location.href='demo-login.html';}
function currentUser(){return JSON.parse(localStorage.getItem('kkf_demo_user')||'null');}
