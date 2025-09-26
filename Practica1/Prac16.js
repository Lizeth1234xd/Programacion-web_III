/*
Proporcione un ejemplo para migrar una función con promesas a async/await.
*/
function miFuncion() {
  return new Promise(res => res(10));
}

async function main() {
  let a = await miFuncion();
  console.log("Número:", a);
}

main();
