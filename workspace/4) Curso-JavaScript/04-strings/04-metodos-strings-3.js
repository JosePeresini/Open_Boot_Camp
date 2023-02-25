// metodos de cadenas de texto (parte 3)
// https://regexr.com

let textoLargo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(textoLargo.match(/no/g));

// existe la palabra dentro del texto true o false
console.log(textoLargo.includes("prefiere"));
console.log(textoLargo.includes("largo"));

// saber si existe un txt empieza con una palabra
console.log(textoLargo.startsWith("Tito"));
// saber si existe un txt termina con una palabra
console.log(textoLargo.endsWith("árboles."));
console.log(textoLargo.endsWith("árboles"));