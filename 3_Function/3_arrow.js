const user ={
    username:'rahul',
    price:99,
    welcomeMessage:function (){
        console.log(`${this.username} , welcome to webiste` );

         console.log(this);// give current context 
    }
}
user.welcomeMessage()// rahul , welcome to webiste

user.username="sam"
user.welcomeMessage()//sam , welcome to webiste
// console.log(this);// {}



// function chai(){
//     console.log(this);// all values 
//     console.log(this.user);// no result,this not use in function
    
// }
// chai()

const chai =()=>{
    let username = "hitesh"
    console.log(this);
}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


// global context value or this value for bwoser is window objevt
//java script is singlr thread 