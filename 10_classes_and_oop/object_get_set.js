const User = {
    _email: 'A@a.com',
    _password: '1234',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value)
    {
     this._email = value   
    }




}

const tea = Object.create(User)
console.log(tea.email);

