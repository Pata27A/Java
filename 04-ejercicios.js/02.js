// Nombre: ancho x Alto
// 8k 7680 x 4320
// 4k 3840 x 2160
// wqhd 2560 x 1440
// fhd 1920 x 1080
// hd 1280 x 720

function nombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
        return '8K'
    }else if (ancho >= 3840 && alto >= 2160){
        return '4K'
    }else{
        return false;
    }
}
let Nombre = nombreResolucion(1, 40);
console.log(Nombre);