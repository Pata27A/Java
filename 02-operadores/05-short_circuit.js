//falso
//false
//0
//''
//null
//undefined
//nan

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

function fn1(){
    console.log('Soy funcion 1');       
    return true;

}
function fn2(){
    console.log('Soy funcion 2');
    return true;
}

let x = fn1() && fn2();