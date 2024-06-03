const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // Refers to the current context global object
    }
}

// user.welcomeMessage()
// user.username = "Arya"
// user.welcomeMessage()

// console.log(this);

// function chai () {
//     const username = "Ankit"
//     console.log(this.username); // Gives undefined, bcuz this only works with objects
// }
// chai()

// const chai = function() {
//     let username = "Ankit"
//     console.log(this.username); // same it will give undefined result as ti dont know hwta is the context bcuz tgis is used inside function
// }

// chai()

// const chai = () => {
//     let user = "Ankit"
//     console.log(this.user);// Again undefined
// }

// chai()


// _____________________________________ //


// Arrow Function


// const addTwo = (num1, num2) =>{
//     return num1+num2 // Explicit Return, return keyword needed
// }


// console.log(addTwo(5,7));
 
// Implicit Return
// const addTwo = (num1, num2) => num1+num2
const addTwo = (num1, num2) => (num1+num2)
// No return keyword needed, One line statement

// returning an object

const add = (num1 ,num2) => ({name: "ankit"})
// To return an object we have to wrap the object in parenthesis
// console.log(add(5,4))

const myArray = [ 2,34,56,6,7]