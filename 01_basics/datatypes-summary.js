//Primitive & non Primitive

// 7 types of Primitive (Call by Value) : String,Number, Boolean, Null,
// Undefined, Symbol, BigInt 


// Symbol - const id =Symbol('223')


//Reference (Non Primitive)
//Array, Objects, Functions


const id = Symbol( '123' )
const ida = Symbol('123')

console.log(id == ida)

//for using big number, place n at the end of the number
//const bigNumber = 211211212122112211212n


//Array, Objects, Functions
const heroes =["a","b","c"]
let obj = {
    name:"hj",
    age:22
}
const myFunction = function (){
console.log("hi")
}

myFunction()

//to know the datatype, use
// typeof
// console.log(typeof variablename)



//memory 

// stack memory(Primitive) and heap memory(Non Primitive)

let myName ="Dexter"
let a =myName
a= "bansi"
console.log(a)
console.log(myName)

let userOne ={
    email:"a@a.com",
    emp:"u1"
}


let userTwo = userOne;

console.log(userOne)
console.log(userTwo)

userTwo.email = "b@B.com"


console.log(userOne)
console.log(userTwo)


