class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }

}

class Teacher extends User{
    constructor(username,email,password){
    super(username)
    this.email = email
    this.password = password
    }

    addCourse(){
        console.log(`A new course was ${this.username}`);
        
    }
    
}

const chai = new Teacher("chai","a@a.com",123)
chai.addCourse()

const tea = new User("tea")
// tea.addCourse()
tea.logMe()
chai.logMe()

