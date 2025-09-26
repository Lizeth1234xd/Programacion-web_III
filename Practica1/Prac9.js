/*
Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.
*/

function promesaExito() {
    return new Promise(function(resolve, reject) {
        let inicio = Date.now();
        while (Date.now() - inicio < 3000) {
        }
        resolve("EXITO , DESPUES DE 3 SEGUNDOS");
    });
}


promesaExito().then(function(mensaje) {
    console.log(mensaje);
});
