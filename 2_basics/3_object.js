// singleton 
Object.create // one of method to create object 
const mySum=Symbol("key1")
// another method is object literal 
const  Jsuser={name:"rahul",
    "full name":"Rahul Singh",
    [mySum]:"mykey ",// important 
    age : 18, 
    isLoggedIN:false,
    lastLoginDays:["Monday","saturday"],
    email:"rahul2google.com"

}


console.log(Jsuser.name);
console.log(Jsuser["full name"]);// prefer this method 

// console.log(Jsuser[mySum]);

// Jsuser.email="rahul@chatgpt.com"
// Object.freeze(Jsuser)
// Jsuser.email="rahul@ereegpt.com"
// console.log(Jsuser);

Jsuser.greeting =function(){
    console.log("hello js user");
    
}
Jsuser.greeting2=function(){
    console.log(`Hello js user,${this.name}`);
    
}
console.log(Jsuser.greeting());
