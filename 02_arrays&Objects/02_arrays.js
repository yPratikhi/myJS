const marvel_hero = ["Thor", "Ironman", "Spiderman"];
const dc_hero = ["superman", "flash", "batman"];

// marvel_hero.push(dc_hero);
// console.log(marvel_hero);

// const allHero = marvel_hero.concat(dc_hero);
// console.log(allHero);

//Spread
const allHero2 = [...marvel_hero, ...dc_hero];
// console.log(allHero2);

//Formate all the nested arr into one
const nestedArr = [1, 2, [4, 5, 6], 7, [6, 7, [4, 5]]]; //[1, 2, 4, 5, 6,7, 6, 7, 4, 5]
const nestedArr2 = nestedArr.flat(Infinity);
console.log(nestedArr2);

console.log(Array.isArray("Hitesh")); //false (not an Array)
console.log(Array.from("Hitesh")); //convert to string
console.log(Array.from({ name: "hitesh" })); // '[]' if not identify

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
