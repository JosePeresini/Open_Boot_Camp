//* Crea un archivo JS que contenga las siguientes líneas

//! Una variable que contenga tu altura en centímetros (entero)
//! Una variable que contenga tu altura en metros (número de coma flotante)
//! Una variable que contenga tu peso en kilogramos (número de coma flotante)
let miAltCm = 199;
let miAltM = 1.99;
let miPeso = 122.70;

console.log(miAltCm); // 199
console.log(miAltM); // 1.99
console.log(miPeso); // 122.7

//! Una variable que contenga tu altura en metros redondeada hacia arriba
let miAlturaM = Math.round(miAltM);

console.log(miAlturaM); // 2

//! Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let miPesoKg = Math.floor(miPeso);

console.log(miPesoKg); // 122

//! Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let valorMax = Number.MAX_VALUE;
let valorMaxSum = valorMax + 1;
let valoresIguales = valorMax === valorMaxSum;

console.log(valorMax); // 1.7976931348623157e+308
console.log(valorMaxSum);// 1.7976931348623157e+308
console.log(valoresIguales); // true