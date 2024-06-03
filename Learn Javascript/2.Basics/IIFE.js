// Immediately Invoked Function Expression

// Function which executes instantly

// It is used because of excluding global scope pollution

(function chai () { // Its anamed IIFE
    console.log(`DB Connected`);
})();// To Stop IIFE semicolon is needed and must


// Arrow FUnction IIFE
// Unnamed IIFE
(() => {
    console.log(`Hello World`);
} ) ();

// Arrow Function with parameters
((num1,num2) => {
    console.log(`Addition of ${num1} & ${num2} is = ${num1+num2} `);
} ) (5,6)



