/*
* Sentencia Switch
*/

let nota = 200;

switch (nota) {
    case 5:
        console.log("buen trabajo");
        break;
    case 4: 
        console.log("podrias hacerlo mejor");
        break;
    case 3:
        console.log("bueno");
        break;
    case 2:
        console.log("no aprobaste");
        break;
    case 1:
        console.log("eres muy malo pa aprobar, podrias mejorar");
        break;
    default:
        console.log("la nota tiene que ser entre el numero 1 y 5");
}