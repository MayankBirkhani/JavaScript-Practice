let ninjas = ['shaun', 'ryu', 'chun-li' ];

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun','crystal', 30 , 20]
console.log(random);

//array property
console.log(ninjas.length);

//array methods

//join method
let joinResults = ninjas.join(',');
console.log(joinResults);

//index of string inside array
let indexResult = ninjas.indexOf('chun-li');
console.log(indexResult);

//concatenate array
let concatResult = ninjas.concat(['ken','crystal']);
console.log(concatResult);

// push :- this method returns the length of new array
let pushResult = ninjas.push('ken');
console.log(ninjas);
console.log(pushResult);

//pop:- this method returns the length of new array
let popResult = ninjas.pop();
console.log(ninjas);

