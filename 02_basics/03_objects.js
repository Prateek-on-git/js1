// singleton

const mySym =Symbol("key1")

//object literals
const u1 ={
    name: "PK",
    "sname": "kk",
    [mySym]: "mykey1",
    age:11,
    loc: "Delhi",
    email: "email@email.com",
    isloggedin: false,
    lastLoginDays:["monday","saturday"]
}
// Object.create // used for creating singleton

// console.log(u1[mySym])
// console.log(u1["sname"])

u1.email="b@b.com"
//Object.freeze(u1)
console.log(u1)
u1.email="c@c.com"
console.log(u1["email"])

u1.greeting =function(){
    console.log(`he is user, ${this.name}`);
}

console.log(u1.greeting());