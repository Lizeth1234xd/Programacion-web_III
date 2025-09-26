/*
Proporcione un ejemplo concreto de encadenamiento de promesas
*/
const miPromesa=new Promise((resolve) => {
resolve(2);});
miPromesa.then((num) => {
    console.log("Paso 1:", num);
    return num + 3;
}).then((num) => {
    console.log("Paso 2:", num);
    return num * 4;
}).then((num) => {
    console.log("Resultado final:", num);
}).finally(() => {
    console.log("asi concluye el encadenamiento");
});
