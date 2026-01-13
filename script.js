const pills=document.querySelectorAll(".active");

pills.forEach(pill=>{
    pill.addEventListener('click',()=>{

        pills.forEach(p=>p.classList.remove('active'));

        pills.forEach(p=>p.classList.add('active'));
    });
    
});


