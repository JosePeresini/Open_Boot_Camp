const list = {
    nombre: "José",
    edad: 32,
    desarrollador: true,
    fechadenacimiento: "august 22 1990",
    libroFavoritoTitulo: "Harry Potter",
    libroFavoritoAutor: "J. K. Rowling",
    libroFavoritoFecha: 2001,
    libroFavoritoUrl: "https://es.wikipedia.org/wiki/Harry_Potter_y_el_c%C3%A1liz_de_fuego"
}

console.log(list);

const fechaDeNacimiento = new Date("august 22 1990");
const list2 = ["Nombre: " + "José", "Edad: " + 32, "Desarrollador?: " + true, "Fecha de Nacimiento: " + fechaDeNacimiento];
console.log(list2);

const list3 = {
    libroFavoritoTitulo: "Harry Potter",
    libroFavoritoAutor: "J. K. Rowling",
    libroFavoritoFecha: 2001,
    libroFavoritoUrl: "https://es.wikipedia.org/wiki/Harry_Potter_y_el_c%C3%A1liz_de_fuego"
}
console.log(list3);
