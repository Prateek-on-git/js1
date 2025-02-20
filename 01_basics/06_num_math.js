const score = 400
const balance = new Number(100.56)

console.log(balance)
console.log(score)
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));

//use tolocalstring('en-In') for displaying commas in the big values for Indian Rupees

/// MATHS
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.SQRT1_2);
//ceil is used for give high value like in 4.2 it will give 5 and in floor it will give 4, for round it will round off with .5 benchmark

// Math is used majorily for random
console.log((Math.floor(Math.random()*10))+1);

const min = 10
const max = 50

console.log(Math.floor(Math.random()*(max-min + 1)+min))

//math.random gives values between 0 & 1