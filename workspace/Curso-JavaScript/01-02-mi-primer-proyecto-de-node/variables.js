var varVar;
let varLet;

// Variables //! Afecta a todo el codigo!
var a = 1;
console.log(a);

var a = 4;
console.log(a);

// Constantes;
const constConst = "Soy una constante";
console.log(constConst);

// Variables Let //? Afecta solo al bloque donde se esta declarando
let b = 3;
console.log(b);

b = 5;
console.log(b);

let variableLet = "Soy una variable let";

for(var i = 0; i < 3; i++) {
    let variableLet = "Soy la segunda variable let";
}

console.log(variableLet);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var num = 4;

console.log(typeof num);

var num = "Hola";

console.log(num);

//? Mala Practicas reutilizar una var/let para cambiar el tipo de dato

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
