//Reduce function 

const myNumbers = [1,2,3,4,5,6,7,8]

const initalValue = 0;
const Reducefunc = myNumbers.reduce(
    (accumulator,curentValue)=>accumulator+curentValue,initalValue
)



console.log(Reducefunc);

