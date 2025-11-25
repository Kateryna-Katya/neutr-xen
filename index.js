/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();lucide.createIcons();const c=document.querySelector(".header__burger"),i=document.querySelector(".header__nav"),u=document.querySelectorAll(".header__list a"),d=()=>{i.classList.toggle("header__nav--active");const n=c.querySelector("i");i.classList.contains("header__nav--active")?n.setAttribute("data-lucide","x"):n.setAttribute("data-lucide","menu"),lucide.createIcons()};c.addEventListener("click",d);u.forEach(n=>{n.addEventListener("click",r=>{window.innerWidth<=992&&d()})});document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("animated-code"),r=String.raw`
class NeuralXen {
  constructor(courseId) {
    this.course = courseId;
    this.status = 'Ready';
  }

  async startLearning() {
    this.status = 'Processing...';
    await new Promise(r => setTimeout(r, 1500));
    console.log("SUCCESS: Открыты новые возможности!");
    this.status = 'Complete';
  }
}

const student = new NeuralXen('FrontendMaster');
student.startLearning();
`;let o=0;anime({targets:{idx:0},idx:r.length,duration:r.length*15,easing:"linear",update(s){o=Math.floor(s.animations[0].currentValue),n.textContent=r.slice(0,o)},complete(){anime({targets:".hero__visuals",opacity:[0,1],translateX:[-50,0],duration:800,easing:"easeOutQuad"}),anime({targets:".hero__content",opacity:[0,1],translateY:[-20,0],duration:1e3,delay:200,easing:"easeOutQuad"})}}),anime({targets:".hero__title, .hero__subtitle, .hero__badge, .hero__actions",opacity:[0,1],translateY:[20,0],duration:1e3,easing:"easeOutQuad",delay:anime.stagger(150)})});
//# sourceMappingURL=index.js.map
