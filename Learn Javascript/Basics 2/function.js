function say(){
    console.log("Hii");
    console.log("Hello");
}

// say()

function add(number1 , number2){
    console.log(number1 + number2)
}

// const result = add(4,5)

// console.log("Result: " ,result);

function substract(number1 , number2){
    const add1= number1 - number2;
    return add1
}

// let result1 = substract(5,2);

// console.log(result);

function loginUser(username = "John"){ // Where John is a default value
    return `${username} just logged in`
}

// console.log(loginUser("Ankit"));

function calculateCartPrice (...n1){ // Rest Operator
    return n1
}

console.log(calculateCartPrice(10,5,320));


const user = {
    name: "Ankit",
    age: 21
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age?anyobject.age:10}`);
}

// handleObject(user)

// handleObject({
//     name: "sam",
//     age: 30
// })

const mynewArr = [200,300,5000]

function returnsecond (getArray){
    return getArray[1]
    
}

console.log(returnsecond(mynewArr))