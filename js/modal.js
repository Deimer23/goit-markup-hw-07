const openmodal = document.querySelector('.openmodal');
const modal = document.querySelector('.backdrop');
const closemodal = document.querySelector('.closemodal');



openmodal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('is-hidden');    
});

closemodal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('is-hidden');    
});