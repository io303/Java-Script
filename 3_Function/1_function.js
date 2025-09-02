function sayName(){
    console.log("r");
    console.log("a");
    console.log("h");
    console.log("u");
    console.log('l');
    
}
// sayName()

function addTwoNumbers(num1,num2){
    return num1+num2
}
 result = addTwoNumbers(3,4)
//  console.log(result);

function loginUserMessage(username="sam"){
    if(!username){     // use=== for checking 
        console.log("please enter the name ");
        return
        
    }
    return `${username} just loged in`
}
console.log(loginUserMessage("rahul"));

function caculatePrice(val1,val2,...num1){
    return num1
}
console.log(caculatePrice(199,200,300,400));// it return the array of all arguments


const user ={
    username:"hitesh",
    prices:199

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}  and prices is ${anyobject.prices}`);
    
}
// handleObject(user)


handleObject({
    username: "sam",
    price: 399
})

const myNewArray=[200,300,400,600]
function returnSecondValue(getArray){
    return getArray[1]
}
 console.log(returnSecondValue([200,400,500,1000]));
 