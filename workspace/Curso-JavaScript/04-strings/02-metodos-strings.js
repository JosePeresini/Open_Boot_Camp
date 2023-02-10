//! Métodos más utilizados con cadenas de caracteres
//! obtener la longitud de un string
let str = "Soy un String";
console.log(str.length);

//! obtener partes de cademas de caracteres
//! slice(), substring(), substr() - Obsoleto
let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(7, 10);
console.log(substring_str);

let substr_str = str.substr(7, 10);
console.log("Esta en deprecated: " + substr_str);

//! al utilizar string sólo reemplaza la primera instancia
let cadena = "Hola, mi nombre es José"
console.log(cadena);
console.log(cadena.replace("José", "José Ignacio"));

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//! al utilizar string sólo reemplaza la primera instancia
console.log(textoLargo.replace("los", "cinco"));

//! al utilizar la expresión regular /g (global) reemplaza todas las instancias
console.log(textoLargo.replace(/los/g, "cinco"));