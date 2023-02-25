
//! Strings cadenas de texto/caracteres
let str_sng = "characters: " + 'a';
let str_dbl = "Hola soy un texto";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "esto es una mala: \"práctica\"";
let str_comillas_simples = 'si queremos cambiar de lenguaje: "cagamos"';
let str_comillas_dobles = "por que literalmente las: 'comillas simples'";
let str_comillas_simples_2 = 'se usan solo para los: \'characters de una sola letra\'';

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

//! Comillas invertidas (backticks)
let str_backticks = `estas comillas se llaman backticks`;
console.log(str_backticks);

let nombre = "José";
let saludo = `Hola, ${nombre} Bienvenido`;

console.log(saludo);

//! Plantillas HTML 
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un Párrafo<p>
</html>
`;

console.log(plantilla);

//! introducción de Var en HTML
let libros = ["La pieda Filosofal", "El prisionero de azkaban", "La orden del feniz"];