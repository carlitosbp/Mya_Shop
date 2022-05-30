const menuinicio = document.querySelector('.menuinicio');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(menuinicio);  

menuinicio.addEventListener('click', ()=>{
menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
if (menu.classList.contains("spread") && e.target != menu && e.target != menuinicio )
{

    menu.classList.toggle("spread")
}
})



const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const menuinicio1 = document.querySelector('.menuinicio')


console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})
contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menuinicio1.style.opacity = '1'
    }
})
const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menuinicio1.style.opacity ='0'
}