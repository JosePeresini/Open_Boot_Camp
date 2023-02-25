//* Crea un archivo llamado fechas.js que contenga las siguientes líneas

//! - La fecha de hoy
const fecha = new Date();
console.log(fecha);

//! - La fecha de tu nacimiento
const fechaNac = new Date(1990, 7, 22);
console.log(fechaNac);

//! - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fechaMasTarde = fecha > fechaNac;
console.log(fechaMasTarde);

//! - Una variable que contenga el día de tu nacimiento
const diaNac = fechaNac.getDate();
console.log(diaNac);

//! - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNac = fechaNac.getMonth() + 1;
console.log(mesNac);

//! - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNac = fechaNac.getFullYear();
console.log(anyoNac);