function multiby5(num){
    return num*5
    console.log(num)
}

multiby5.power = 4
console.log(multiby5(5))

console.log(multiby5.power);
console.log(multiby5.prototype);

function createUser(username,score){
    this.username = username
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
    console.log(this.score)
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",40)

``

chai.increment()
chai.printMe()