// Operador .valueOf() - valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf ());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let n = Number("adios");
console.log(n); //Nan
console.log(isNaN(n)); //true

let numerador = 19;
let divisor = 0;

console.log(numerador / divisor); // Infinito

let divisor_2 = null;
console.log(numerador / divisor_2); // Infinito

// convertir los strings a valores numéricos: number, paseInt y parseFloat.
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); // 5.8917.2 Error de concepto

console.log(Number(numero) + num2);// Number permite cast en número / 23.09

console.log(parseInt(numero)); // 5
console.log(parseFloat(numero)); // 5.89

let num3 = 4;
console.log(parseInt(num3)); // 4
console.log(parseFloat(num3)); // 4

// Números hexadecimales (base 16)
let numHex = '0x3a5b7'; // all number empieza con 0x
console.log(parseInt(numHex, 16)); // 239031

// obtener valores máximos y mínimos en JS
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision); // podemos trabajar el min-valor 2.220446049250313e-16/0.0000000000000222
console.log(min_valor_JS); // 5e-324 (son 0.0000000000000000000000000...5 323 ceros por delante y el ultimo numero es el 5)
console.log(max_valor_JS); // 1.7976931348623157e+308