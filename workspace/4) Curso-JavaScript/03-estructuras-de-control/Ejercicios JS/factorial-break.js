//! factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let i = 1;
let factorial = 10;
while (i < 10) {
    if (i === 10) {
        break;
    }
    factorial *= i;
    i++;
}

console.log(factorial);