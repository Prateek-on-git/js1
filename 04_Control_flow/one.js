//if

// if (condition = true){
//     scope
// // }
// console.log("hi")
const month = 3

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("febraury")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("case match")
        break;
}
 

//falsy values 
// false 0, -0, BigInt 0n, "", null,
//undefined //

//truthy values
// "0",'false', " " -string values , {},[],
//function (){}


const emptyObj= {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}
userEmail =[]

if (userEmail.length===0){
    console.log("Array is Empty");
}


// Nullish Coalescing Operator (??) null undefined

let val1;
val1 = undefined ?? 15
console.log(val1)

//Terniary Pperator

// conditon ? true: false