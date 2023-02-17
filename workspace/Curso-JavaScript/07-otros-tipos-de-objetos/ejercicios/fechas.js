// fechas
const fecha = new Date();

console.log(fecha);

// se inicializan con el año/mes/dia
// cabe destacar que los meses inicializan con 0 y finalizan el 11
// 0 siendo enero y 11 siendo diciembre
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

const fecha3 = new Date(-10000000000000); // milisegundos
console.log(fecha3);

console.log(fecha < fecha2);

const fecha4 = new Date("october 13 1979 12:15:15")
console.log(fecha4);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha5);
console.log(fecha2 === fecha5); //! no se pueden comparar fechas de esta forma

console.log(fecha2.getTime() === fecha5.getTime());

// obtener dia, fecha y año de una fecha
// dia .getDate()
console.log(fecha2.getDate());

// obtener el mes .getMonth()
console.log(fecha2.getMonth() + 1);

// obtener el año .getFullYear()
console.log(fecha2.getFullYear());

console.log(fecha2);

// .toLocalDateString()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB")); // 20/11/1987