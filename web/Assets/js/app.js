const API_BASE='';
function token(){return localStorage.getItem('kkf_token')||''}
async function api(path,options={}){const headers={'Content-Type':'application/json',...(options.headers||{})};if(token())headers.Authorization=`Bearer ${token()}`;const res=await fetch(`${API_BASE}${path}`,{...options,headers});const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.detail||'Request failed');return data}
function money(v){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:2}).format(v||0)}
function logout(){localStorage.removeItem('kkf_token');localStorage.removeItem('kkf_user');location.href='/auth/login.html'}
async function requireLogin(){if(!token()){location.href='/auth/login.html';return null}try{return await api('/api/auth/me')}catch(e){logout();return null}}
