document.querySelectorAll(".hex").forEach(btn=>{
btn.addEventListener("mousemove",e=>{
const rect = btn.getBoundingClientRect();
btn.style.setProperty("--x",(e.clientX-rect.left)+"px");
btn.style.setProperty("--y",(e.clientY-rect.top)+"px");
});
});
