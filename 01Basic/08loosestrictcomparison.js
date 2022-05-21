let age = 25;

//loose comparison (different types can still be equal)
console.log('loose comparison example:- ');
console.log(age == 25);
console.log(age == '25'); // Behind the scene JS is converting the string to number type as type of age is number and then comparing/evaluating it



// strict comparison(different types cannot be equal)
console.log('Strict comparison example:- ');
console.log(age === 25);
console.log(age === '25');
console.log(age !== '25');