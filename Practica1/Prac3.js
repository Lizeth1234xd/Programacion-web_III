/*
Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
e impares:
let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]}
 */

function miFuncion(arr){
    let pares=[];
    let impares=[];
    for(let i=0; i<arr.length ; i++){
        if(arr[i]%2===0){
            pares[pares.length]=arr[i];
        }else{
            impares[impares.length]=arr[i];
        }
    }
    return{pares: pares , impares: impares};
}

let obj = miFuncion([1,2,3,4,5])
console.log(obj) // { pares: [2,4], impares: [1,3,5]}
