//Primitve Datatype demonstration.
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score one: ${scoreOne} Score two: ${scoreTwo}`);

scoreOne = 100;
console.log(`Score one: ${scoreOne} Score two: ${scoreTwo}`);


// Reference Datatype demonstration.
const userOne = {name:'Mayank', age:'25'};
const userTwo = userOne;

console.log(userOne,userTwo);

userOne.age = '26';
console.log(userOne,userTwo);