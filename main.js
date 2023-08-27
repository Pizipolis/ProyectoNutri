const btn1= document.getElementById("1");
const menu= document.querySelector(".menu");
const btn2= document.getElementById("2");
const menu2= document.getElementById("menu2");
const btn3= document.getElementById("3");
const menu3= document.getElementById("menu3");



btn1.addEventListener("click", function(){
    menu.classList.toggle("activo");
}
)

btn2.addEventListener("click", function(){
    menu2.classList.toggle("activo");
}
)

btn3.addEventListener("click", function(){
    menu3.classList.toggle("activo");
}
)

