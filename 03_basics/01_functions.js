function addnum(n1,n2){
 //console.log(n1+n2); 
let res = n1+n2;
return `${res} is the result`
}

// res = addnum(3,5)
// console.log("res",res)

console.log(addnum(3,5))

function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,500,800))

const user={
    name: "jalebi",
    age:29
}

function username(obj){
    console.log(`the name is ${obj.name} & age is ${obj.age}`    
    )
}

// username(user)

username({
    name:"Mango",
    age: 34
})

const myArray =[200,33,232,2323]
function retSecVal(getArray){
return getArray[2]
}

// console.log(retSecVal(myArray))

console.log(retSecVal([1,2,3,4]))