class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`Username is ${this.username}`);
    };

     static createID(){ //static is used to limit the access of the method in a object for initiation of a new object
        return `123`;
    }
    
}

class Teacher extends User{
    constructor(username ,email)
    {
        super(username)
        this.email = email
    }
}

const test = new Teacher("name new","a@a.com")
const Prateek = new User("Prateek")
// console.log(Prateek.createID())
test.logMe()
// console.log(test)
console.log(test.createID())