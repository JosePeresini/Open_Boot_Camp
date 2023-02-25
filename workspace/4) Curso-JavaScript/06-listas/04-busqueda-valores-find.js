// iterar valores de una lista
const array = ["Hola", 2, 5, 90, false, undefined];

// forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// forma ES6 (Más eficiente) .foreach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor); // 3, 6, 2, 77, 2, 3, 93, 19
})

console.log(suma); // 205

// busqueda de un valor dentro de una lista .find()
// encontrar elemento 90
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})

console.log(variable);

const listaObjetos = [
    { nombre: "José", edad: 32 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Leire", edad: 35 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 7 }
];

// menos eficiente
const objeto = listaObjetos.find(o => {
    if (o.nombre === "José") {
        return true;
    }
})
console.log(objeto.edad);

// más eficiente
const objeto2 = listaObjetos.find(o => {
    return o.nombre === "Gorka";
})
console.log(objeto2.edad);

// super eficiente
const objeto3 = listaObjetos.find(o => o.nombre === "Lucía");
console.log(objeto3.edad);

// super super eficiente
const { edad } = listaObjetos.find(o => o.nombre === "Miguel");
console.log(edad);
