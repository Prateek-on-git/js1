const myNumbers = [1,2,3,4,5,6,7,8]

let newNumbs = myNumbers.map((num)=>num + 10)
console.log(newNumbs)

// newNumbs.forEach((numa)=>numa+4)
// console.log(newNumbs);

// newNumbs.forEach((num, index, arry)=>arry[index]+4) = wrong
newNumbs.forEach((num, index, arr) => arr[index] = num + 4)
console.log(newNumbs);


const newna = newNumbs
            .map((num)=>num*100)
            .map((num)=>num+10)
            .filter((num)=> num>=1900)

console.log(newna)
