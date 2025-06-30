

function user(email,password){
    this._email=email,
    this._password =password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()

        }, 
        set: function(value) {
            this._email= value
        }
    })

}

const test = new user("a@a.com",1234)
console.log(test.email);
