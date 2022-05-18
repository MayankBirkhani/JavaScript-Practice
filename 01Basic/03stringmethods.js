//common string methods

let email = 'mayankbirkhani98@gmail.com';

let result = email.lastIndexOf('m');
console.log("lastIndexOf method:- " + result);

//slice function - will extract string from starting index to index-1
let sliceResult = email.slice(5,10);
console.log("slice method:- " + sliceResult);

//substr :- it will extract the substring from the starting index to staring index + end index position
let subStrResult = email.substr(5,10);
console.log("substr Result:- " + subStrResult);

//replace- it will find the character first position and replace it with the given character
let replaceResult = email.replace('n', 'C');
console.log("Replace method:- "+replaceResult);

//concatenate with number
let likes = 10;
letConResult = 'The blog has ' + likes + " likes";
console.log("Concatenate number and string:- " +letConResult);