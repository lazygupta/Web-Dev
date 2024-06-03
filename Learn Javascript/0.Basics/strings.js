const { log } = require("console")

const name = "Ankit"

const a = 5

console.log(`Hello ${name} How are you ${a}`)

const gamename = new String('Ankit is my name')

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.toLowerCase())
// Doesnt change the original value

console.log(gamename.charAt(2))

// Primitive data type are stored in srtack
// Non primitve data types aere stored in Heap