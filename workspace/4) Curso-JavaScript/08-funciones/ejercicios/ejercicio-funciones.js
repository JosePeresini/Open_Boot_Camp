//* Crea un archivo JS que contenga las siguientes líneas

//! - Una función sin parámetros que devuelva siempre "true"
siempreTrue()

function siempreTrue() {
    if (true) {
        console.log("Esto devuelve siempre true");
    }
}

//! - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const cincoSegundos = function () {
    setTimeout(function() {
        console.log("Hola soy una promesa");
    }, 5000)
}

// cincoSegundos();

//! - Una función generadora de índices pares automáticos
function* generadoraDeIndices() {
    let index = 0;
    while(true) {
        index++;
        if (index >= 1) {
            index = index + 1;
        } 
        yield index;
    }    
}

const generadora = generadoraDeIndices();
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
console.log(generadora.next().value);
// ....

