(()=>{'use strict';const menu=document.getElementById('menuToggle'),nav=document.getElementById('nav');if(!menu||!nav)return;menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}))})();
/* Lightweight homepage motion: no animation libraries or scroll polling. */
(()=>{'use strict';
const root=document.getElementById('home');
if(!root)return;
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||!('IntersectionObserver' in window))return;
const selectors=[
'.home-manifesto > *','.intro > *',
'.home-journey-heading > *','.home-journey-tile',
'.home-editorial-photo','.home-editorial-text > *',
'.home-values .section-heading > *','.home-values-grid > article',
'.home-journal .section-heading > *','.home-journal-grid > article',
'.cta-inner > *'
];
const targets=[...root.querySelectorAll(selectors.join(','))];
const observer=new IntersectionObserver(entries=>{
 for(const entry of entries){
  if(!entry.isIntersecting)continue;
  entry.target.classList.add('motion-visible');
  observer.unobserve(entry.target);
 }
},{rootMargin:'0px 0px -35px 0px',threshold:0.08});
targets.forEach((el,i)=>{
 el.classList.add('motion-ready');
 el.style.setProperty('--motion-delay',((i%3)*85)+'ms');
 observer.observe(el);
});
})();
