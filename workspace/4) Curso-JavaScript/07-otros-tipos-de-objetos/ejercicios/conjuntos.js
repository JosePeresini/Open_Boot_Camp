//* Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//! - Un nuevo Set con los nombres de tu familia
const nombresFam = ["Jorge", "Edith", "Luciana", "Esteban", "Victoria", "José", "Matias", "Joaquin", "Lucia"];
const setFam = new Set(nombresFam);

console.log(setFam);

//! - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
setFam.add("José")
console.log(setFam);

//! - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
setFam.add("JavaScript");
console.log(setFam);