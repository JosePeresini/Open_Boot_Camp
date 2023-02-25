// funciones: como se declaran y se utilizan
const nom = "José";

// saludar("José");
saludar(nom)

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

//!!!!!!!!!!!!!!!
let nombre_2 = "Juan";
console.log(nombre_2);

despedir(nombre_2)
console.log(nombre_2);

function despedir(nombre) {
    nombre = "Diego";
    console.log(`Adiós ${nombre}`);
}

//!!!!!!!!!!!!!!!!!!!!!
let persona = {nombre: "Juan", apellido: "González"};

saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludar()

//!!!!!
function imprimerNumero(numero = 7) { // parametros por defecto
    console.log(numero);
}

imprimerNumero()

//!!!!!!!!!!!!!!!!!!!!!!!!
