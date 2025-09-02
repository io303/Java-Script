const myArray=[1,2,3,4,5,6]

const myHeros=["shaktimn","naagraj"]

const myArray1 = new Array (1,2,3,4)

console.log(myArray[1]);

//Array method 

myArray.push(6)
myArray.push(7)
myArray.pop()

myArray.unshift(9) // push at front 
myArray.shift() // pop at front 

console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArr= myArray.join()
console.log(newArr);
console.log(myArray);

// slice ,splice 

console.log("A",myArray);
const myn1= myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray);

const myn2 =myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);











