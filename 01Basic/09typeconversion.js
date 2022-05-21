//type conversion
let score = '100';

console.log(score + 1);

score = Number(score);
console.log(score + 1);
console.log(typeof score);


let result = Number('hello');
console.log(result);

let resultNumber = String(30);
console.log(resultNumber, typeof resultNumber);


let boolResult = Boolean('');
console.log(boolResult, typeof boolResult);