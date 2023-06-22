document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.mobile-nav').classList.toggle('display')
});


const accrdContent = document.querySelectorAll('.accrd-cont').forEach((accordion)=>{
    accordion.addEventListener('click',()=>{
        const panel = accordion.nextElementSibling;
        panel.style.display=panel.style.display === 'block'? 'none':'block';
    })
    
})
