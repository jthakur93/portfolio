const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%'});
const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.case-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  cards.forEach(c=>{c.style.display=(f==='all'||c.dataset.tags.includes(f))?'flex':'none'});
}));
