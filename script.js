const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/h*100)+'%'});
const heroPhoto=document.querySelector('.hero .profile-photo');
if(heroPhoto&&'IntersectionObserver' in window){
  const navH=document.querySelector('.nav')?.offsetHeight||76;
  new IntersectionObserver(([entry])=>{document.body.classList.toggle('scrolled',!entry.isIntersecting)},{rootMargin:`-${navH}px 0px 0px 0px`}).observe(heroPhoto);
}
const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.case-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  cards.forEach(c=>{c.style.display=(f==='all'||c.dataset.tags.includes(f))?'flex':'none'});
}));
