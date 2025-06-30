class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get password(){
        return `${this.paassword}kumar`
    }
    set password(value){
        this.paassword = value.toUpperCase()
    }
}

const Prateek = new User("a@a.com","a213bz")
console.log(Prateek.password);
