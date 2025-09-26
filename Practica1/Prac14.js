/*
Proporcione un ejemplo para convertir una promesa en un callback.
*/
function miFuncion(arr) {
    return new Promise((resolve) => {
        resolve(arr * 2);
    });
}

miFuncion(4).then((resultado) => {
    console.log("Callback simulado con promesa :", resultado);
})
.finally(() => {
    console.log("exito");
});
