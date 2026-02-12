// Scroll suave cinematográfico
document.querySelectorAll('.hex').forEach(btn=>{
    btn.addEventListener('click',()=>{
        window.scrollBy({
            top:window.innerHeight,
            behavior:'smooth'
        });
    });
});
