// funciones tipo flecha y anononimas

const array = [1, 5, 6, 2, 7, 12, 8, 92];
const array2 = array.map((valor) => valor * 2);

console.log(array2);

//! Esta funcion como la de abajo son iguales
// const dobleDelValor = valor => {
//     return valor * 2;
// }

//! Pero esta es más facil de leer
const dobleDelValor = valor => valor * 2;
console.log(dobleDelValor(6));

const array3 = array.map(dobleDelValor);
console.log(array3);

console.log(doble(6));

function doble(valor) {
    return valor * 2;
}