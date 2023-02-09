//! Comparaciones

//? Igualdad

if (5 == 5) {
    console.log("5 es igual a 5 - DÉBIL");
}

if (5 === 5) {
    console.log("5 es igual 5 - FUERTE");
}

//todo == sólo compara el valor
//todo === compara el valor y el tipo

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

if (a == b) {
    console.log("5 es igual a 5 - DÉBIL");
}

if (a === b) {
    console.log("5 es igual a 5 - FUERTE");
}

//todo es diferente != - !==

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - DÉBIL");
}

if (c !== d) {
    console.log("c es diferente a d - FUERTE");
}

//todo Comparaciones mayor que y menor que

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min");
}

if (max >= 10) {
    console.log("max es mayor o igual que min");
}

if (min < max) {
    console.log("min es menor que max");
}

if (min <= max) {
    console.log("min es menor o igual que max");
}