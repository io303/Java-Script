const marvel=["thor","ironman","hulk"]
const dc=["batman",'superman',"flash"]

// marvel.push(dc);
// console.log(marvel);// push arry inside the array 

// console.log(marvel[3][1]);

// marvel.concat(dc)
// console.log(marvel);// same as earlier

const aLLHero=marvel.concat(dc)
// console.log(aLLHero);

const all_new_heros= [...marvel, ...dc]// best way forpusing 
// console.log(all_new_heros);

const another_array=[1,2,3,4,[4,5,6,7],[9,0,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("hitesh"));
console.log(Array.from({name:"hitesh"}));

let a1=100
let a2=200
let a3=300
console.log(Array.of(a1,a2,a3));




