document.querySelectorAll(".hex[data-target]").forEach(btn=>{
btn.addEventListener("click",()=>{
const id=btn.dataset.target;
const section=document.getElementById(id);

if(section){
section.scrollIntoView({behavior:"smooth"});
}
});
});
