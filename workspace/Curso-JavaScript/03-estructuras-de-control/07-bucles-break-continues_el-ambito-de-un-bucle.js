//? Casos muy específicos - break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }

    console.log(lista[i]);

    if (lista[i] > 5) {
        break
    }
}

//? El ambito de un bucle

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;
    }
    let j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if (lista[i] > 5) {
        break
    }
}

//* las variantes dentro del bucle suceden dentro del mismo,
//* las mejores prácticas son con let/const.

console.log(j);
console.log(i);
console.log(k);

