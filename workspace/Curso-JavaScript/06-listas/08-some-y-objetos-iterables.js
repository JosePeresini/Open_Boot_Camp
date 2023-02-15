// .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];

// mayor a 0
const res = array.some(valor => valor < 0);
console.log(res);

// menor a 0
const res2 = array.some(valor => valor > 0);
console.log(res);

// si existe algun valor: 90 del array false
const existe = array.some(valor => valor === 90);
console.log(existe);

// si existe algun valor: 9 del array true
const existe2 = array.some(valor => valor === 9);
console.log(existe2);

const listaObjetos = [
    { nombre: "José", edad: 32 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Leire", edad: 35 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 7 }
];

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existeMiguel); // true

// obtener lista una lista a partir de un objeto iterable
const str = "Hola soy José";
console.log(str[5]);

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2, 3, "Hola", 4]);
const ar_set = Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);
