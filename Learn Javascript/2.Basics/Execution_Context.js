// Execution context
// HOW Js runs the program

// Two Phases

// Global Execution Context first made which is kept in "this"
// In browser Global Execution Context is window

// Function Execution Context

// Eval Execution Context - Rare 

// How things get executed in JS

// Two Phases are:-
// 1. Memory Creation phase - Memory Allocation
// 2. Execution Phase


let val1 = 10
let val2 = 5

function add (num1, num2) {
    let total = num1+num2;
    return total
}

let result1 = add(val1,val2)
let result2 = add(18,2)

// Now what happens with above code

//1. Global Execution ---this

//2. Memory Phase
//  val 1-> undefined
//  val 2-> undefined
//  add -> definition
//  result1 -> undefined
//  result2 -> undefined

//3. Execution Phase
//  val1 -> 10
//  val2 -> 5
//  result1 = add -> 
//         |  New variable environemnt       |
//         |        +                        |
//         |   Execution Thread              |
//         |                                 |
//         |_________________________________|
//                   |
//                   |
//                   |
//            1. Memory Phase :- 
//                num1 -> undefined
//                num2 -> undefined
//                total -> undefined
//            2. Execution Phase :-
//                num1 -> 10
//                num2 -> 5
//                total -> 15 ---- This returns to global execution context
//     After this the Environment gets deleted
//  result1 -> 15
//  result2 = add -> 
//         |  New variable environemnt       |
//         |        +                        |
//         |   Execution Thread              |
//         |                                 |
//         |_________________________________|
//                   |
//                   |
//                   |
//            1. Memory Phase :- 
//                num1 -> undefined
//                num2 -> undefined
//                total -> undefined
//            2. Execution Phase :-
//                num1 -> 10
//                num2 -> 2
//                total -> 12 ---- This returns to global execution context
//     After this the Environment gets deleted


// ---------------------------------------- //

// Call Stack

// Last in First out

