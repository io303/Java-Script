// global scope ke pollution se bachne(variable) ke liye iife ke use krte hai

(function chai(){
    console.log("bd connected");
    
})();

(()=>{
    console.log(`db connected`);
    
})()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')