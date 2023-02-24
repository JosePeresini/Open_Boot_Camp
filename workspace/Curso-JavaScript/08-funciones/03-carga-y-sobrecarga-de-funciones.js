// carga y sobrecarga de funciones
saludar();

function saludar() {
    hola();
}

function hola() {
    console.log("Hola, soy una función");
}

saludar();

// 1. global() //! carga la funcion
// 2. saludar() global() //! añade la funcion saludar por encima de la global
// 3. hola() saludar() global() //! cuando entra a la funcion la llama a la funcion
// 4. saludar() global() //! quita la carga
// 5. global() //! se queda como en el principio

//! esto es un error
// function recursiva() {
//     recursiva();
// }
