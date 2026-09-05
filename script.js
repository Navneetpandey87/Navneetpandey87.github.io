const header=document.getElementById("header"), menu=document.getElementById("menu"), nav=document.getElementById("nav");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>20));
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
document.getElementById("year").textContent=new Date().getFullYear();
