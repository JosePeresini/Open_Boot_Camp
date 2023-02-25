// .sort()"-(ordenar)"
const array = [3, 7, 8, 9, 10, 15, 5, 4];

console.log(array);

array.sort((a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return +1;
    } else { // a === b
        return 0;
    }
})

console.log(array);

// ordenar unicamente arrays númericos
const arrayNumericos = [4, 1, 7, 3, 1, 3, 56, 1, 546];

arrayNumericos.sort((a, b) => a - b);
console.log(arrayNumericos);

arrayNumericos.sort((a, b) => b - a);
console.log(arrayNumericos);

//! arrays de objetos
const listaObjetos = [
    { nombre: "José", edad: 32 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Leire", edad: 35 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 7 }
];

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return - 1;
//     } else if (a.edad > b.edad) {
//         return + 1;
//     } else {
//         return 0
//     }
// });
listaObjetos.sort((a, b) => a.edad - b.edad);

console.log(listaObjetos);