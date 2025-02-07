//tipo de referencia
// los objetos son una agrupacion de datos que tienen sentido en tenerlos juntos
//personaje de tv
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje ={
    nombre : "Tanjiro",
    anime : "Demon slayer",
    edad : 16,
};
console.log(personaje);
console.log(personaje.anime)// solo para ver algo especifico


personaje.edad = 13; //para cambiar el valor

delete personaje.anime; //para eliminar la variable y el valor

console.log(personaje);