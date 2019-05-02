
var intervalo = 3000;/* 3000 = 3s */

function slide1(){
    document.getElementById("banner").src = "Funcionalidade.png";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("banner").src = "Eficiência.png";
    setTimeout("slide1()",intervalo);
}
/*
function slide3(){
    document.getElementById("banner").src = "3.jpg";
    setTimeout("slide1()",intervalo);
}

*/