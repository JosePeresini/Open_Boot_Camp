const logger = require('./logger-ejercicio');

//* Crea un nuevo proyecto de Node

//! - Instala la dependencia Winston

//! - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado


const myFunction = valError => {
    if (valError === "Debe ser de tipo string") {
        return valError;
    } // throw new Error("Sera un error?")
}

myFunction("asd")

logger.error("es un error");

//! - Registra el error en un archivo a través de un try...catch
try {
    myFunction();
} catch(e) {
    logger.error("error", e.toString());
}