// funciones asincronas 

function miAsinc() {
    // aca hace una llamada a bbdd externo
    // puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);
    // si esta todo correcto
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
})

miPromesa
    .then(() => console.log("Se ah ejecutado correctamente"))
    .catch(() => console.log("Error"))
    .finally(() => console.log("Se ejecuta siempre"));