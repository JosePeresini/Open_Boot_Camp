//* Crea un archivo JS que contenga las siguientes líneas

//! Una cadena de texto con tu Nombre
//! Otra cadena de texto con tu Apellido
//! Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let nombre = " José ";
let apellido = " Peresini ";
let estudiante = `${nombre} ${apellido}`;
console.log(nombre);
console.log(apellido);
console.log(estudiante);

//! Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
//! Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMayus);
console.log(estudianteMinus);


//! Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cuentaStr = estudiante.length;
console.log(cuentaStr);

//! Una variable que contenga la primera letra del Nombre
//! Otra variable que contenga la última letra del Apellido
let primeraLetra = nombre.substring(1, 2);
let ultimaLetra = apellido.substring(8);
console.log(primeraLetra);
console.log(ultimaLetra);

//! Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.replace(/ /g, "");
console.log(sinEspacios);

//! Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let boolNombre = estudiante.includes(nombre);
console.log(boolNombre);

