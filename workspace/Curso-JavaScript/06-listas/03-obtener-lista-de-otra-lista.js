// obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"]

// el slice no modifica el valor del array original

console.log(array.slice(1, 4)); // se eliminan a partir y al final del indice saca los que necesitamos  [1, 2, 3]
const array2 = array.slice(2, 5);
console.log(array2);// [2, 3, true]

const array3 = array.slice(2, -2);
console.log(array3); // desde el final hasta el principio del array [2, 3, true]