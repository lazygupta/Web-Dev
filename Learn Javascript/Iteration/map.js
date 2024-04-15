const myNumbers = [1,2,3,4,5,6,7,8,9]
// map returns a value
// const res = myNumbers.map( (item) => (item+10)) // It returns a value
// const res = myNumbers.map( (item) => {
//     return item+10 // Whenever we use scope inside a arrow function we should always return it not direct write

// }) 


// Chaining
const newNums = myNumbers
                    .map ( (num) => (num*10)) // returns to next map
                    .map((num) => num+1) // returns value to next filter
                    .filter ( (num) => (num>=35))


console.log(newNums);

