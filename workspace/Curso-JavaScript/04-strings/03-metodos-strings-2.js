// Métodos de cadenas de textp (parte 2)
let input = "Leo";
let db = "leo";

// toLowerCase() - toUpperCase();
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLocaleLowerCase());
console.log(input.toLocaleUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

// formas de concatenar 2 cadenas de caracteres
let str_1 = "Hola soy la primera cadena";
let str_2 = "y yo la segunda";

console.log(str_1.concat(" ", str_2));
console.log(str_1 + " " + str_2);
console.log(str_1, " ", str_2);
console.log(`${str_1} ${str_2}`);

// eliminar espacios al inicio y al final
let str_3 = "   soy un string con espacios al final   ";
console.log(str_3.length);
// trim()
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

// carácter que esta en cierta posición
let str_4 = "Soy el string numero 4"; // ["S", "o", "y", " ", "e", "l", .....]

console.log(str_4.charAt(10));
console.log(str_4[10]);

// obtener la posicion de una palabra
let str_5 = "Soy José y me gusta el rugby. Mi nombre es José y apellido Peresini";
console.log(str_5.indexOf("José"));
console.log(str_5.charAt(4));
console.log(str_5.indexOf("Si no encuentra la palabra que buscamos nos devuelve un -1"));
console.log(str_5.lastIndexOf("José"));
console.log(str_5.charAt(43));
console.log(str_5.lastIndexOf("Si no encuentra la palabra que buscamos nos devuelve un -1"));