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
// const obj3={5:"a",6:"b"}
const obj4 ={5:"a",6:'b'}

// constobj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

const obj3={ ...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"e@gmail.com"
    },
    {
        id:3,
        email:"f@gmail.com"
    }

]
users[1].email 

console.log(tinder);

// console.log(Object.keys(tinder));// give the keys in array 
console.log(Object.values(tinder));
console.log(Object.entries);

console.log(tinder.hasOwnProperty('isLoggedIn'));

const course ={
    coursename:"js in hindi",
    price:'999',
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);
const {courseInstructor:Instructor}=course 
console.log(Instructor);

{
    // json
}
[
    {

    },
    {

    }
]

