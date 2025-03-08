/// don't use var
//var is bad in scope both global and local


let a = 300;
if(true){
    let a = 10
    const b = 20
}

// console.log(a)

function one(){
    let username ="prateek"
    console.log(username)
    
    function two(){
        console.log(username)
        username ="new name"
        console.log(username)
    }
    console.log(username)
    two()
}

one()


if(true){
    const username ="prateek"
    if(username==="prateek"){
        const website = " You "
        console.log(website+username)
    }
    console.log(username)
}

//// ++ interesting ///

function addone(num){
  return num+1

}
console.log(addone(5))