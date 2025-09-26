/*
 Realizar un código para ejecutar una función callback después 2 segundos.(callback)
*/
function miFuncion(accion) {
    let inicio = Date.now();
    while (Date.now() - inicio < 2000) {
    }
    accion();
}

miFuncion(function() {
    console.log("================ 2 segundos han pasado ================");
});
