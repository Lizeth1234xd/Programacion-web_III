/*
Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
reescribir mejor con async/await haciendo el código más limpio y mantenible.
*/
function Usuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nombre: "PEDRO" });
    }, 1000);
  });
}
function Pedido() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pedido.1", "Pedido.2"]);
    }, 1000);
  });
}
async function main() {
  let u = await Usuario();
  console.log("Usuario encontrado = ", u);
  let p = await Pedido();
  console.log("Pedidos encontrados = ", p);
}
main();
