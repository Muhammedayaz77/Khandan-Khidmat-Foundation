const THEME_KEY='kkf_theme';
function applyTheme(theme){document.documentElement.classList.toggle('dark',theme==='dark');localStorage.setItem(THEME_KEY,theme);const b=document.getElementById('themeToggle');if(b)b.textContent=theme==='dark'?'☀ Light':'☾ Dark';}
function initSite(){
 const saved=localStorage.getItem(THEME_KEY);applyTheme(saved==='dark'?'dark':'light');
 const toggle=document.getElementById('themeToggle');if(toggle)toggle.addEventListener('click',()=>applyTheme(document.documentElement.classList.contains('dark')?'light':'dark'));
 const menu=document.getElementById('menuToggle');const nav=document.getElementById('siteNav');
 if(menu&&nav){
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕ Close':'☰ Menu';});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰ Menu';}));
 }
 const links=[...document.querySelectorAll('#siteNav a[href^="#"]')];
 const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
 if(sections.length&&links.length){
  const setActive=()=>{let current=sections[0].id;sections.forEach(s=>{if(window.scrollY+130>=s.offsetTop)current=s.id;});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));};
  window.addEventListener('scroll',setActive,{passive:true});setActive();
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initSite);else initSite();