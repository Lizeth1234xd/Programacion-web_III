/*
Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración
*/

let arreglo2 = [10, 20, 30, 40, 50];

let [ , , ...resto] = arreglo2;

console.log(resto);
