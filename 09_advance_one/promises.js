const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB Calls, Cryptography, network calls
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})




new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async Task2");
    resolve() //for when Promise is consumed
},1000)

}).then(function(){
    console.log("async2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"CHai", Email:"chaiandcode.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user)

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       
        let error = false
        if(!error){
             resolve({username:"test", password:"1234"})
        }else{
            reject("Error")
        }

    },1000)
})

//catch is used if there is any error
 promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
console.log(username)
}).catch(function(error){
console.log(error)
}).finally(()=>console.log("Finally the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
       
        let error = true
        if(!error){
             resolve({username:"js", password:"1234"})
        }else{
            reject("JS Error")
        }

    },1000)
})

async function consumePromiseFive(){
  try{
      const response = await promiseFive
    console.log(response)
  }
  catch(error){
      
    console.log(error)
  }
}

consumePromiseFive()

// async function getAllUsers() {
// try {
//        const response = await fetch("https://jsonplaceholder.typicode.com/users")

//    const data  = await response.json()
//    console.log(data)
// } catch (error) {
//     console.log("E:", error);
// }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))