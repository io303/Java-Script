const promiseone=new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Asyn task is completed');
        resolve()
        
    }, 1000);
})

promiseone.then(function(){
    console.log("promise consumed");
    
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"chai",email:"chai@example.com"})
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
    
    console.log(user.username);
    
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"rahul",pasword:"123"})
        }
        else{
            reject('ERROR:some went wrong')
        }
    }, 1000);
})

promise4.then(function(user){
    console.log(user.user);
    return useReducer.username
    
    
}).then(function(username){
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("this promise is either resolved or rejected");
    
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()