const superheroes = require('superheroes');
// var mysuperHeroes = superheroes.all;
var mysuperHeroes = superheroes.random();

console.log('super heroes name ', mysuperHeroes);

console.log('----------------Super villains-------------------')
const supervillains = require('supervillains')
let superVillain = supervillains.random()
console.log(superVillain);