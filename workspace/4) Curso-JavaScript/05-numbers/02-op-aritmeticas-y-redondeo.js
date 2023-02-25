// principales op aritmeticas
let a = 3.5;
let b = 4.8;

// suma
console.log(a + b);

// resta
console.log(a - b);

// multiplicación
console.log(a * b);

// división
console.log(a / b);

// representacion de numeros en cadenas de txt
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// redondeo de numeros decimales
let c = 3.3;
let d = c * 3;
console.log(d);
console.log(typeof d);

// .toFixed(x) - limita el valor de decimales (x)
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 1839.12435345654;
let f = 2316548486565;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) - limita el numero total de cifras
console.log(e.toPrecision(6));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision());