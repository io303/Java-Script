function multiplyeby5(num){
    return num*5
}

multiplyeby5.power=2
console.log(multiplyeby5(5));
console.log(multiplyeby5.power);

console.log(multiplyeby5.prototype);// empty object

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()