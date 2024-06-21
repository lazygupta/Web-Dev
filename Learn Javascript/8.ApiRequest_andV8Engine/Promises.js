// Syntax 1
// console.log("Wait 1 second");
// const promiseOne = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//         console.log("Hello we are inside Promise");
//         resolve();
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log("We are inside resolve function");
// })

// Syntax 2

// new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("We are inside Promise Two");
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("We are inside resolveTwo function");
// })

// const promiseThree = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve({username: "Ankit",email: "abc@gmail.com"})
//     },1000)
// })

// promiseThree.then((user) => {
//     console.log({user});
// })

// Syntax 4

// const promiseFour = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username: "Ankit",password: "123"})
//         }
//         else{
//             reject('ERROR: Something,Went Wrong!')
//         }
//     },1000)
// })

// promiseFour
//   .then((user) =>{
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// })
// .finally( () => console.log("Promise is finally either resolved or rejected")) // This will always run whether it is rejected or accepted


// const promiseFive = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username: "Ankit", password: "123"})
//         }
//         else{
//             reject("ERROR: JS went wrong")
//         }
//     },1000)
// })


// using of Async and Await
// Does the same thing, But doesnt handles error gracefully

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



// ------------------------------- //


// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// fetch("https://jsonplaceholder.typicode.com/users")
// .then( (response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch( (error) => console.log("Error:"))

// another way


const promiseSix = new Promise( function (resolve,reject) {
    resolve(fetch("https://api.github.com/users/hiteshchoudhary"))
})

promiseSix.then((data) => {
    // console.log(typeof data);
    const data1 = data.json()
    // console.log(typeof data1);
    return data1;
})
.then((datafiltered) => {
    console.log(datafiltered);
})

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     return response.json()
// })
// .then((data)=> {
//     console.log(data);
// })
// .catch((error) => {
//     console.log("Error:");
// })