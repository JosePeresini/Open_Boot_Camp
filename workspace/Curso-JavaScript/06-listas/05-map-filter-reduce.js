// metodos mas avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

const val = array.forEach(v => {
    console.log(v);
})
console.log(val);

// Super eficiente .map()
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);

const listaObjetos = [
    { nombre: "José", edad: 32 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Leire", edad: 35 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 7 }
];

//! Super eficiente .filter()
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         false
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30);
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(nuevaLista);

const valores = [20, 50, 98, 78, 10, 200];

const suma  = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
})
console.log(suma);