//!-----------------IF-----------------------

/*
Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
*/

console.log("1) Ejercicio del if")

var numeroIf = 0;

if (numeroIf < 0) {
    console.log("Es negativo");
} else if (numeroIf > 0) {
    console.log("Es positivo");
} else {
    console.log("Solo es 0");
}

//!------------------While----------------------

/*
Crea un bucle While, este bucle tendrá que tener 
como condición que la variable numeroWhile sea 
inferior a 3, el bloque de código que tendrá el 
bucle deberá:

* Incrementar el valor de la variable en uno cada vez que se ejecute.

* Mostrarlo por pantalla cada vez que se ejecute.
*/

console.log("2) Ejercicio del while")

var numeroWhile = 0;

while (numeroWhile < 3) {
    console.log(numeroWhile);
    numeroWhile = numeroWhile + 1;
}

//!-------------Do-While-------------------------

/* 
Para el bucle Do While, deberás crear la misma 
estructura que en el While, pero solo se debe 
ejecutar una vez.
*/

console.log("3) Ejercicio del do while")

var numeroWhile = 1;

do {console.log(numeroWhile)
    numeroWhile = numeroWhile + 1;
} while (numeroWhile < 2);

//!-----------------FOR-----------------------

/*
Para el bucle For, crea una variable numeroFor, 
esta variable tendrá como valor 0 y su condición 
será que la variable sea igual o menor que 3, se 
irá incrementando en 1 su valor cada vez que se 
ejecute y deberá mostrarse por pantalla.
*/

console.log("4) Ejercicio del for")

for(numeroFor = 0; numeroFor <= 3; numeroFor = numeroFor + 1) {
    console.log(numeroFor);
}

//!-----------------SWITCH-----------------------

/*
Por último, para el Switch, deberás crear la 
variable estacion, y distintos case para las 
cuatro estaciones del año. Dependiendo del valor 
de la variable estacion se deberá mandar un 
mensaje por consola informando de la estación en 
la que está. También habrá que poner un default 
para cuando el valor de la variable no sea una 
estación.
*/

console.log("5) Ejercicio del switch")

var estacion = "a";

switch (estacion) {
    case "verano":
        console.log("La estación de hoy es Verano");
        break;
    case "invierno":
        console.log("La estación de hoy es Invierno");
        break;
    case "otoño":
        console.log("La estación de hoy es Otoño");
        break;
    case "primavera":
        console.log("La estación de hoy es Primavera");
        break;
    default:
        console.log("ADVERTENCIA ESTA NO ES UNA ESTACIÓN");
}   

//!---------------------------------------------