/*
! Bucles for 
for(inicializacion; condicion; actualizacion) {
    Esto es el bucle
}
? i = i + 1
? i += 1
? i++
*/

for (let i = 0; i < 10; i = i + 1) {
    // Esto es el bucle
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}

//! estructura for-of
for (let valor of lista) {
    console.log(valor);
}

//! estructura for-each
lista.forEach(valor => {
    console.log(valor);
})

//! estructura for-in
let persona = {
    nombre: "José",
    apellido: "Peresini",
    edad: 32,
    isDeveloper: true
}

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}