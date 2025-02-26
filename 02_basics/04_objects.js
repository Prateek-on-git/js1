const u1 = {}

u1.id="123"
u1.name = "names"
u1.loggedin =false

// console.log(u1)

const regu1 ={
    email:"a@e.com",
   totname:{ fullname:{
        fname:"First",
        sname:"last"
    }
}

}
// console.log(regu1.totname.fullname.sname);
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

//hasown property to check if the object has the defined key or not

const course ={
    cname: "cname1",
    price:"899",
    couin:"pk"
 }
// course.cname

console.log(course.couin)

const {couin}=course
console.log(couin);

const {couin: oun} =course
console.log(oun)
