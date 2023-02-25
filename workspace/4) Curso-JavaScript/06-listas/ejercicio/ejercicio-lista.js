//* Crea un archivo JS que contenga las siguientes líneas

//! - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listCompra = ["Huevos", "Leche", "Manteca", "Café", "Queso", "Vinagre", "Sal"];
console.log(listCompra);

//! - Modifica la lista de la compra y añádele "Aceite de Girasol"
listCompra.push("Aceite de Girasol");
console.log(listCompra);

//! - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listCompra.pop("Aceite de Girasol");
console.log(listCompra);

//! - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const moviesFav = [
    {titulo: "Harry Potter y La Orden del Fenix", director: "J.K., Rowling", fecha: 2007},
    {titulo: "El Señor de los anillos: La Comunidad del Anillo", director: "J. R. R., Tolkien", fecha: 2022},
    {titulo: "The Fast Saga: F9", director: "Justin, Lin", fecha: 2021}
];

//! - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const fechaMov = moviesFav.filter(movies => movies.fecha > 2010);
console.log(fechaMov);

//! - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listOnlyDir = moviesFav.map(dir => dir.director)
console.log(listOnlyDir);

//! - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listNameMov = moviesFav.map(tit => tit.titulo);
console.log(listNameMov);

//! - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const dirTitles = listOnlyDir.concat(listNameMov);
console.log(dirTitles);

//! - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listDirMovs = [...listOnlyDir, ...listNameMov];
console.log(listDirMovs);