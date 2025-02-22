const her = ["p1","p2","p3"]
const her1 = ["h1","h2","h3"]

//her.push(her1);
//console.log(her);

//[ 'p1', 'p2', 'p3', [ 'h1', 'h2', 'h3' ] ]
// push creates above array

//her.concat(her1);
//console.log(her);
//[ 'p1', 'p2', 'p3' ]
//concatenation merges 2 arrays but in a new array,it doesn't alter the original array

// h3 = her.concat(her1)
// console.log(h3)


// h4 = her1.concat(her).concat(A1arr)
// console.log(h4)

/// ... is spread operator-used for opening all the array elements & combining them in a new array

// h3 =[...her,...her1]
// console.log(h3)
//[ 'p1', 'p2', 'p3', 'h1', 'h2', 'h3' ]
// 

const A1arr = [1,23,1,[1,2,3,5],[12,2,2]]
const a2 = A1arr.flat(Infinity)
console.log(a2)
// //[
//     1, 23,  1, 1, 2,
//     3,  5, 12, 2, 2
//   ]

console.log(Array.isArray("Prateek"))
console.log(Array.from("Prateek"))
// false
// [
//   'P', 'r', 'a',
//   't', 'e', 'e',
//   'k'
// ]

console.log(Array.from({name: "Prateek"})) 
//[] - gives empty array

let b1 = 1
let b2 =3
let b3 = 4

console.log(Array.of(b1,b2,b3));
// /[ 1, 3, 4 ]