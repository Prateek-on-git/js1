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
    resolve()
},1000)

}).then(function(){
    console.log("async2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        
    },1000)
})