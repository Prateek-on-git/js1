// const myArr = ['aa','ba','1a',2,3,5]

// console.log(myArr[0]);


// myArr.push(6) //for adding value in the array
// console.log(myArr)
// myArr.pop() // for deleting last value in array
// console.log(myArr) //for deleting last value in array

// myArr.unshift(0) // for adding the value in the start of the array, but it should not be used, as
// // it shifts all value
// console.log(myArr)

// myArr.shift() // it removes the first value in the array

// //join converts array into string

// console.log(myArr);
// const aar = myArr.join()
// console.log(aar)

//slice splice
const myArr = ['aa','ba','1a',2,3,5]
console.log("A", myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1)
console.log(myArr)

const myN2 = myArr.splice(1,3)
console.log(myN2)
console.log(myArr)

// slice - shows the value from range (1 to N-1)
//splice - shows the value (1 to N) and removes the same value(1 to N) from the main array/