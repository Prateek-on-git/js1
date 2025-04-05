// for of loop -high order array loop

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings ="Hello wword"
// for (const num of greetings) {
//     console.log(`Hi ${num}`)
    
// }


//MAPS - datatype- it hold key value pairs, unique value 

const map = new Map()
map.set('Del', '110019')
map.set('mum', 110012)

console.log(map)

for (const key of map) {  //prints in objects form
    console.log(key)
}

for (const [key,value] of map) { //prints as text
    console.log(key, ':', value)
}

const myObject = {
    "game1": "GTA",
    "game2": "asphalt"
}

for (const [key, value] of myObject) {
    console.log(key, ':', value)
}