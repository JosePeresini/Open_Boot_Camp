// sets o conjuntos
const array = [1, 2, 3, 4, 5, 1, 2, 5, "hola", {id: 5}, {id: 5}];
const miSet = new Set(array);

console.log(array);
console.log(miSet);

// .add()
miSet.add(9);
console.log(miSet);

miSet.add(10);
console.log(miSet);

// .delete()
miSet.delete("hola");
console.log(miSet);

// .clear() // elimina todo el set
// miSet.clear();
// console.log(miSet);

// .has()
console.log(array.includes(2)); //true
console.log(miSet.has(4)); // true
console.log(miSet.has(40)); // false

// .size()
console.log(miSet.size);

miSet.forEach(valor => {
    console.log(valor);
})

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...miSet];
console.log(ar_miSet[0]);