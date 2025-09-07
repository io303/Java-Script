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



function chai(){
    console.log(this);// all values 
    console.log(this.user);
    
}
chai()