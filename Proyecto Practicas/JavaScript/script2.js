const actualizarUsuario = document.querySelector('.usuario_actualizar');
const usuario = document.querySelector('.usuario');
const openUsuario = document.querySelector('.head_boton');

openUsuario.addEventListener('click',(e)=>{
    e.preventDefault();
    usuario.classList.add('usuario--show')
});

actualizarUsuario.addEventListener('click',(e)=>{
    e.preventDefault();
    usuario.classList.remove('usuario--show')
});

