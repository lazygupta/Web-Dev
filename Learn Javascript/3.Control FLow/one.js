// if

// if (true) {

// }

// const userLoggedIn = true

// if (userLoggedIn) {
//     console.log("Welcome User");
// }

// if ( 2 == "2" ){
//     console.log("Executed");
// }

// const score = 200

// if ( score > 100) {
//     let power = "fly"
//     console.log(`User Power = ${power}`);
// }

// console.log(`User Power = ${power}`); // Power is not defined as let has block scope 

// const score = 500 
// if ( score > 400 ) console.log("test"),console.log("test1"); // Bad Practice

// ___________________________ //

// Switch Case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

//__________________________________//


// Truthy and falsy

const useremail = "abc@gmail.com" // Assumes to be a true value
// const useremail = "" // Assumes to be a false value

if (useremail){
    console.log("Correct");
}else{
    console.log("False");
}

// Falsy Value
// false,0 ,-0 , BigInt 0n, "" , null , undefined, NaN

// Truthy Value
// "0" , 'false' , " " , [], {} , function() {}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")