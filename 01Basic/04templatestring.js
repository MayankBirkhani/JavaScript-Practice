//Template String:- Let us inject variables into the string without having to exit out and using the plus side to concatenate them.

//template string
const title = "Best reads of 2022";
const author = "Mario";
const likes = 30;

//concatenation way
let normalResult = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(normalResult);

//template string way
let templateResult = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(templateResult);

