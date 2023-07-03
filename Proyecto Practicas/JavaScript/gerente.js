const openModal = document.querySelector('.modal_aceptar');
const modal = document.querySelector('.modal');



openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')
});