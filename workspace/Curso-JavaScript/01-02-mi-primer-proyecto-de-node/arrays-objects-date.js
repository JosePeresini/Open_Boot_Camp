//? Arrays

const list = [1, "Hola", true, undefined, null];
console.log(list);

const list2 = new Array(2, "Mundo", false, undefined, null);
console.log(list, list2);

const list3 = new Array(3);
console.log(list3);

list3[0] = "Soy el primero elemento";
console.log(list3);

const list4 = [list, list2, list3];
console.log(list4);

//! Objetos

const movil = {
    anchura: 5,
    altura: 10,
    marca: "iphone",
    isWhite: true,
    contactos: ["José", "Gorka", "Martín", "Raúl"],
    tarjeta: {
        marca: "Apple",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}

console.log(movil);
console.log(movil.altura);
console.log(movil.anchura);
console.log(movil.marca);
console.log(movil.isWhite);
console.log(movil.contactos);
console.log(movil.tarjeta.marca);
console.log(movil.tarjeta.almacenamiento);

movil.anio = 2019;
movil.marca = "Samsung"
console.log(movil.anio);
console.log(movil.marca);

//todo Fechas --> librerias de apoyo: Moment.js

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //! utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getDate() + 1;
const anio = ahora.getFullYear();
console.log(dia, mes, anio);