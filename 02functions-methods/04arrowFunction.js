// Arrow Function
const calcArea = (radius) => {
    return 3.14 * radius**2;
};

//More concise Arrow function
const calArea = radius => 3.14 * radius**2;


const area = calcArea(5);
console.log('Area is: ',area);

const conciseArea = calArea(5);
console.log('Area is: ',conciseArea);

// practice arrow functions
/* 
    const greet = function(){
    return 'hello, world';
    }
*/

const greet = () => "hello , world";
console.log(greet());


/* 
const bill = function(products, tax){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}

*/

const bill = (products , tax) =>{
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
      }
      return total;
}

console.log(bill([10,15,30], 0.2));