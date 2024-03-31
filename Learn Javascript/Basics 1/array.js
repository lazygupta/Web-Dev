// Array copy creates a shallow copy 


// Shallow Copy of an object is a copy whose properties share the same reference point as those of the source object from whuch the copy was made.
// Deep Copy of an object is a copy whose properties doesnt share the same reference point

const myarr = [1,2,3,"Ankit", 4 ,5 ,6]

const myarr2 = new Array(1,2,3,"Arya")

// console.log(myarr)
// myarr.push(5)
// myarr.push(7)
// console.log(myarr)
myarr.shift()
myarr.unshift(0)
const number = 2

console.log(myarr)

const newarr = myarr.join() // Just converts the array into strings

// console.log(newarr)

// console.log(typeof newarr)

// console.log("A", myarr)

const mna1 = n=myarr.slice(1,3) 
// It just outputs from index 1 to index 2
// Doest chanegs the original array

console.log("A", myarr)
console.log(mna1);

const mna2 = n=myarr.splice(1,3) 
// It changes the original Array
// It just outputs from index 1 to index 3

console.log("B", myarr)
console.log(mna2);