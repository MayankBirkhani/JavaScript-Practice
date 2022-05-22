//function declaration
function greet(){
    console.log("Hello There!");
}


//function expression:- whenever a variable is set equal to function, string, number etc it is known as function expression. Use of ; at the end is mandatory.
const speak = function(){
    console.log("Good Day!");
};

// Hoisting is a term that loosely describes how our functions are effectively hoisted to the top of a file before the rest of our JS actually runs.
// It simply means we can call function from top of the file and declare function at the bottom.
// Hoisting works with function declaration only, not with function expression.
//JS doesn't Hoist function expression


greet();    //calling/invoking the function
speak();
meet();


//Hoisting example
function meet(){
    console.log('Nice to meet you');
}