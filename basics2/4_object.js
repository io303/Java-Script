// const tinderuser = new Object()// singketon object 
const tinder={}// non singlrton object

 tinder.id="123abc"
 tinder.naame="sam"
 tinder.IsLoggedIn=false


//  console.log(tinder);
 
const regular_user ={
    email:"somename@gmail.com",
    fullname:{
        userName:{
            firstname:"rahul",
            lastname:"Singh"
        }
    }
}
// console.log(regular_user); // whole object will preinted 

console.log(regular_user.fullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

constobj3={obj1,obj2}
console.log(obj3);

