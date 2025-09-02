const name="Rahul"
const RepoCount =43
console.log(name + RepoCount+"value");

console.log(`hello my name is ${name} and my repo count ${RepoCount}`);

const gameName = new String("rahul-Singh");
// console.log(gameName[0]);
console.log(gameName.__proto__); // __proto__ is an internal property that connects an object to its prototype.
// It reflects the object's prototype chain, which is how JavaScript implements inheritance.


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));