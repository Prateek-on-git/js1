// let myName = "prateek   "


// console.log(myName.truelength);

let hero = ['a','b','c']

let herop ={
    a: "p1",
    b: "p2",
    c:"p3",


    getbp: function(){
        console.log(`Spidy power is ${this.b}`)
    }
}

Object.prototype.prateek = function(){
    console.log(`Prateek is present in all objects`)
}

herop.prateek()
hero.prateek()

// if prototype is binded to Object,then it gives access to all function, arrays, strings, whereas
//if reverse happens, i.e. prototype is injected on an array, then all the arrays have access to the property of the protype but not the function & strings

//inheritance

const User = {
    name: "a",
    email: "a@a.com"
}

const Teacher = {
    makevid: true
}
const TeachingAssist = {
    isAvailable: false
}
const TASupport ={
    makeAssignment:'Js Assign',
    fullTime: true,
    __proto__:TeachingAssist

}

Teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(TeachingAssist, Teacher)

let anotherUsername ="Prateek      "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()