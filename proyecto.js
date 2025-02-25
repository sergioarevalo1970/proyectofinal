//-----------------------------------------------------------
// 05125030 - Sergio Rolando Arévalo
// Proyecto Final
//-----------------------------------------------------------

//---------------------------
// Asignación de variables
//---------------------------

var precio_base = 2000; // Variable de precio base del seguro
var recargo_totala = 0; //almacena el total de los calculos de los recargos del asegurado
var recargo_totalc = 0; //almacena el total de los calculos de los recargos del conyugue
var recargo_total_hijos = 0; //almacena el total de los calculos de recargos por hijos
var recargo_total = 0; // almacena el total de los recargos

//--------------------------------------------------------------------------------------------
// Variables de recargo para el asegurado
//--------------------------------------------------------------------------------------------
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

//--------------------------------------------------------------------------------------------
// Variables para solicitar los datos del asegurado
//--------------------------------------------------------------------------------------------
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

//--------------------------------------------------------------------------------------------
// Se Realizan los calculos del recargo para el asegurado
//--------------------------------------------------------------------------------------------
var edad_numero = parseInt(edad); //Convertimos la edad del asegurado a numero y calculamos

if(edad_numero>=18 && edad_numero<=24){
    recargo_total_asegurado = precio_base * edad_18
    recargo_totala = recargo_totala + recargo_total_asegurado
}
  
if (edad_numero >= 25 && edad_numero <= 49){
    recargo_total_asegurado = precio_base * edad_25
    recargo_totala = recargo_totala + recargo_total_asegurado
}

if (edad_numero >= 50) {
    recargo_total_asegurado = precio_base * edad_50
    recargo_totala = recargo_totala + recargo_total_asegurado
}

//--------------------------------------------------------------------------------------------
// Variables de recargo para el asegurado si esta casado se calcula el recargo del conyugue
//--------------------------------------------------------------------------------------------
var casado = prompt("¿Está casado actualmente? SI/NO");
var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%
var edad_conyugue; // variable para ingresar la edad del conyugue

if("SI" == casado.toUpperCase()){
    edad_conyugue = prompt("¿Que edad tiene su esposo/a?")
}
var edad_conyugue_numero = parseInt(edad_conyugue); //Convertimos la edad del asegurado a numero y calculamos

if(edad_conyugue_numero>=18 && edad_conyugue_numero<=24){
    recargo_total_conyugue = precio_base * edad_18
    recargo_totalc = recargo_totalc + recargo_total_conyugue
}
  
if (edad_conyugue_numero >= 25 && edad_conyugue_numero <= 49){
    recargo_total_conyugue = precio_base * edad_25
    recargo_totalc = recargo_totalc + recargo_total_conyugue
}

if (edad_conyugue_numero >= 50) {
    recargo_total_conyugue = precio_base * edad_50
    recargo_totalc = recargo_totalc + recargo_total_conyugue
}

//--------------------------------------------------------------------------------------------
// Variables de recargo si el asegurado tiene hijos
//--------------------------------------------------------------------------------------------

var hijos = parseInt(prompt("Si tiene hijos indique la cantidad")) || 0;
var hijos_recargo = 0.2; // Variable para saber la cantidad de hijos
var recargo_total_hijos = hijos * (precio_base * hijos_recargo);


//--------------------------------------------------------------------------------------------
// Variables de recargo si el asegurado tiene hijos
//--------------------------------------------------------------------------------------------
recargo_total = recargo_totala+recargo_totalc+recargo_total_hijos
precio_final = precio_base + recargo_total

//--------------------------------------------------------------------------------------------
// Mostramos los resultados
//--------------------------------------------------------------------------------------------
alert ("Para el asegurado "+nombre)
alert ("El recargo total para el asegurado sera de: "+recargo_totala)
alert ("El recargo total por el conyugue sera de: "+recargo_totalc)
alert ("El recargo total por los hijos sera de: "+recargo_total_hijos)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio final de la cotizacion es:"+precio_final)
