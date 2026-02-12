document.querySelectorAll(".hex[data-target]").forEach(btn=>{
btn.addEventListener("click",()=>{
document.getElementById(btn.dataset.target)
.scrollIntoView({behavior:"smooth"});
});
});
