const openModal = document.querySelector('.hero_boton');
const modal = document.querySelector('.modal');



openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal--show')
});



const crear = document.querySelector('.crear');
const openCrear = document.querySelector('.crear_open');


openCrear.addEventListener('click',(e)=>{
    e.preventDefault();
    crear.classList.add('crear--show')
});
