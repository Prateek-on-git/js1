

function SetUsername(username){

    //complex db calls
    this.username= username
    console.log("called")
}

function createUser(username,email,password){
    SetUsername.call(this, username) // for giving access out of EC
    this.email = email
    this.password = password
    
}

const chai = new createUser("chai","a@a.com",123)
console.log(chai)