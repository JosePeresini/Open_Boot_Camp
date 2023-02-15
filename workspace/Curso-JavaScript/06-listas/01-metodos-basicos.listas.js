// trabajar con listas(arrays)
let var1 = 45;
let array = [1, "hola", false, {id: 5}, null, undefined, var1];

console.log(array);

// acceder a los valores de un array a traves de su posicion
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);

// metodos paara introducir nuevos valores
// .push() .unshift => mutan el valor del array

// valores al finar -> Push
array.push("final", 45, 100, false);
console.log(array);

// valores al principio -> Unshift
array.unshift("inicio", 87, 99);
console.log(array);

// metodos para eliminar valores
// .pop() .shift() => mutan el valor del array
const array2 = [1, 3, "hola", false]


// valores al final -> Pop
array2.pop();
console.log(array2); // [1, 3, 'hola']

// valores al principio -> Shift
array2.shift();
console.log(array2); // [3, 'hola']

// metodos para eliminar, modificar o añadir valores en el array
const array3 = [1, 2, 3, 4, 5, 6];

// eliminar valores .splice(indice, numValoresAElminar)
array3.splice(2, 1)
console.log(array3);

// añadir valores .splice(indice, 0 ,valores)
array3.splice(2, 0, "hola", 3, 9);
console.log(array3);

// modificar valores .splice(indice, 1 ,valores)
array3.splice(2, 1, 3, 9)
console.log(array3);