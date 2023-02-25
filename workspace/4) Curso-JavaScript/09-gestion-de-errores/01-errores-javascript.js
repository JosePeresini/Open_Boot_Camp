const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val;
    } throw new Error("El valor debe ser de tipo number")
}

// const elDoble = miFuncion("ala");
const numero = 8;

try {
    // este codigo puede fallar
console.log("Se ejecuto correctamente");
const doble = miFuncion(numer);
console.log(doble);
} catch(e) {
    // en el caso de fallar, quiero que lo ejecutes
    console.error(`El valor de e es: ${e}`);
    console.error("ERROR");
} finally {
    console.log("Se ejecuta siempre");
}

//! InternalError: problemas internos/ funcion recursividad
//! SyntaxError: mal escrito
//! TypeError: cuando se escribe una funcion y pide como parametro un 
//? numero y se le pasa un true o false.
//! RangeError: en un array de 10 elementos pasa esto cuando se busca 
//? el 11vo elemento que no está.
//! ReferenceError: no existe la referencia

//todo https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error