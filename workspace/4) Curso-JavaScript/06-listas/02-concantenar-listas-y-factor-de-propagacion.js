// unir 2 listas .concat(lista2)

const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", 8, true, undefined];

console.log(lista1);
console.log(lista2);
console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3);

// unir 2 listas con el factor de propagación
console.log(...lista3); // hola 2 false null adios 8 true undefined

const lista4 = [...lista1, ...lista2];
console.log(lista4); // ['hola', 2, false, null, 'adios', 8, true, undefined]

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2];
console.log(lista5); // [ ['hola', 2, false, null], ['adios', 8, true, undefined] ]
