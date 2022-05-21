//boolean & comparisons

console.log(true,false, "true", "false");

console.log("Type of true "+ typeof true);
console.log("Type of false "+ typeof false);
console.log('Type of "true" '+ typeof "true");
console.log('Type of "false" '+ typeof "false");


//method can return booleans
let email = 'mayankbirkhani98@gmail.com';
let names = ['mario','luigi','toad'];

let emailResult = email.includes('@');
console.log("Result:- "+ emailResult);

let nameResult = names.includes('luigi');
console.log("Name Result " +nameResult);


//comparison operators

let age = 25;
console.log(age == 25);
console.log(age != 30);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name > 'crystal');