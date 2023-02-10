//! factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let i = 1;
let factorial = 10;
while (i < 10) {
    factorial *= i;
    i++;
}

console.log(factorial);