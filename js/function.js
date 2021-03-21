"use strict"
var fomulario = document.getElementById("forma");
var salida = document.getElementById("salida");
var sexos = document.getElementsByName("sexo");
function cotizar(){
 var cotizacion = 1000.0;
 var camisetaVerde = forma["camisetaVerde"].checked;
 var dia = forma["dia"].value;
 var edad = forma["edad"].value;
 if(camisetaVerde){
 cotizacion-=100;
 }
 switch (dia){
 case "Viernes":
 cotizacion-=50;
 break;
 case "Domingo":
 cotizacion-=100;
 break;
 }
 switch (edad){
 case "JOVEN":
 cotizacion-=50;
 break;
 case "ADULTO":
 cotizacion-=100;
 break;
 }
 for(var i = 0, total = sexos.length; i < total; i++){
 var sexo = sexos[i];
 
 if(sexo.checked && sexo.value === "femenino"){
 cotizacion-=100;
 }
 }
 salida.innerHTML = "<small>Cotizacion: $</small>" + cotizacion;
}
