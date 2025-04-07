const code =["a","b","c","d","e"]

// code.forEach(  function (item){
//     console.log(item)
// }  )

// code.forEach(   (item)=> {console.log(item)})

function func(codew,index){
    console.log(codew,index)
}
code.forEach(func)

const Arr2=[{username:"name1", pwd:"1234"},
    {username:"name2", pwd:"abcd"},
    {username:"name3", pwd:"a2b4"}]


Arr2.forEach((item)=>{
    console.log(item.username)
})    