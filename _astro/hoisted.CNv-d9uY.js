document.addEventListener("DOMContentLoaded",()=>{const t=window.matchMedia("(max-width: 640px)"),n=document.getElementById("mobile-menu"),d=document.getElementById("hamburger-btn"),o=document.getElementById("close-btn"),c=document.querySelectorAll("#mobile-menu a"),s=()=>{n.classList.remove("hidden"),document.body.classList.add("overflow-hidden")},e=()=>{n.classList.add("hidden"),document.body.classList.remove("overflow-hidden")};d.addEventListener("click",s),o.addEventListener("click",e);for(const i of c)i.addEventListener("click",e);t.addEventListener("change",e)});