//let is block scoped
//var is function scoped

function greet(){
    let a = 'hello';

    var c = 'variable';

    if(a == 'hello'){
        let b = 'let';
    }

 //   console.log( a  + ' ' +  b );  // This will throw an exception
    console.log( a  + ' ' +  c );


}
greet();