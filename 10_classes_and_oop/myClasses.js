// ES6

class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai","a@a.com",1234)
console.log(chai.encryptPassword());

console.log(chai.changeUsername());