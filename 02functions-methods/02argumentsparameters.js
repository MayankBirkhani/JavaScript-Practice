//arguments and parameters

const speak = function(name = 'Human', time = 'Morning'){ //when we receive a value here, this is known as function parameter.
    console.log(`Good ${time} ${name}!`);
}

speak('Mayank'); // When we pass a value to the function, this is known as an argument.