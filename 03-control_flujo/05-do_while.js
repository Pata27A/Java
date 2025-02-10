let i = 0;

while ( i < 10 ){
    if ( i % 2 == 0){
    console.log('Numero par', i);             //en while se ejecuta primero la condicion
    }
    i++;
}

//console.log('Fuera del While');

do {
    if(i % 2 == 0){
        console.log('Numero par', i);          // en do-while se ejecuta primero del codigo luego la condicion.
    }
    i++;
} while (i < 10);