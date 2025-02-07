function suma(a,b){
    console.log(arguments);
    return a + b;                //parametros
}
                                               //las funciones pueden recibir multiples Arg.  y Parm.

let resultado = suma(5, 6, 2, 3, 1);       //argumentos
console.log(resultado);
console.log(typeof suma);