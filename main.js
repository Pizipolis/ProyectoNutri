/* Iniciamos Nuestro archivo Javascript */
/* Primero defino las variables, utilizando la palabra const, pues sera una constante, esto quiere decir
que no se va a modificar */
/* Para seleccionar elementos del DOM podemos utilizar distintos tipos de selectores, en este 
caso utilizo getElementById y querySelector */

const btn1= document.getElementById("1"); /* entre parentesis van las clases, id o etiquetas segun el selector usado */
const menu= document.querySelector(".menu");
const btn2= document.getElementById("2");
const menu2= document.getElementById("menu2");
const btn3= document.getElementById("3");
const menu3= document.getElementById("menu3");

/* Luego de definir la constante le agrego un evento, por medio de addEventListener
El evento se establece dentro de los parentesis en este caso es un click, junto con la funcion, 
que en este caso la defino dentro del mismo parentesis  */

btn1.addEventListener("click", function(){
    menu.classList.toggle("activo");
}
)
/* Estas funciones fueron creadas para que el menu se abra desde el icono de menu hamburguesa */
/* Esto lo desarrollo mediante classList que "ingresa" a los estilos y los maneja en base a la propiedad que elijamos darle
en este caso toggle va a activar/añadir una clase si ésta no se encuentra en el elemento y desactivar/quitar si lo esta*/
btn2.addEventListener("click", function(){
    menu2.classList.toggle("activo");
}
)

btn3.addEventListener("click", function(){
    menu3.classList.toggle("activo");
}
)

/* Terminando con el menu paso a crear nuevas variables para cada elemento que seleccionare */
const imagen=document.getElementById("logoMenu");
const menuCentral=document.getElementById("menuCentral");
const clic=document.getElementById("clic");
const caja=document.getElementById("cajaLogo");

/* Ahora lo que quiero lograr es que el menu de home que se encuentra escondido, cambie a visible */
/* Esto lo hago con una clase que agruegue en css, y permite ocultar el menu, por lo que si quito esta classe 
al ocurrir el evento el menu aparecera */
imagen.addEventListener("click",function(){
    imagen.classList.toggle("ocultar");
    menuCentral.classList.toggle("ocultar");/* Aqui ya incorpore dos acciones dentro de una misma funcion, una  */
/* que muestre el menu y otra que quite la imagen simultaneamente */
}
)
/* Lo siguiente se desarrolla para regresar al estado inicial, mediante un clic en la palabra menu */

clic.addEventListener("click",function(){
    menuCentral.classList.add("ocultar");
    imagen.classList.toggle("ocultar");

})


