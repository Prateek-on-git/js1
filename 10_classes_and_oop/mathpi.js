// const des = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(des)
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)


const chao = {
    name:"t1",
    price: 200,
    isAvailable: true,

  orderChao: function(){
    console.log("error");
    
  }
}

console.log(Object.getOwnPropertyDescriptor(chao,"price"))
Object.defineProperty(chao,"price",{enumerable: false})

console.log(Object.getOwnPropertyDescriptor(chao,"price"))

for (let [key,value] of Object.entries(chao)) {
    if (typeof value !== 'function'){
         console.log(`${key}:${value}`)
    }
   
}