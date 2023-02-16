//* Crea un archivo llamado objetos.js que contenga las siguientes líneas

//! - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "José",
    apellido: "Peresini",
    edad: 32,
    altura: 199,
    eresDesarrollador: true
};

//! - Una variable que obtenga tu edad a partir del objeto anterior
const edad = "edad";
console.log(datosPersonales[edad]);

//! - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const nuevosDatosPers = [
    {...datosPersonales},
    {nombre: "Matias", apellido: "Delsoglio Melian", edad: 31, altura: 180, eresDesarrollador: false},
    {nombre: "Andrés", apellido: "Betancourt", edad: 30, altura: 165, eresDesarrollador: false}
];
console.log(nuevosDatosPers);

//! - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
nuevosDatosPers.sort((a, b) => a.edad - b.edad);
console.log(nuevosDatosPers);