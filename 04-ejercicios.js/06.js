let array = [2, 5, 10];

function cuantosPositivos(arr){
    let cantidad = 0; 
    for (elemento of arr){
        if(elemento > 0){
            cantidad++;
        }
    }
    return cantidad;
}
let resultado = cuantosPositivos(array);
console.log(resultado);