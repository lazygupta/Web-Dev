// Reduce method
// Just think it as a accumulator which sums all the elements in ana array

const mynum = [ 2,4,5,6,7]
const initialValue =0 ;
// const res =mynum.reduce((accumulator,currentValue) => accumulator + currentValue, initialValue
// )
// Accumulator is first initalised with initialValue = 0
// And after every iteration Accumulator becomes the total sum of  (accumulator + currentValue) , where currentValue is element of arrays

// console.log(res);

const res1 =mynum.reduce((acc,curr) => acc+curr ,0)

const res =mynum.reduce( function (accumulator,cuurvalue) {
    return accumulator + cuurvalue
},initialValue) // Accumulator gets the value which is after comma

// console.log(res);

const myObj = [
    {
        itemName: "Web dev Course",
        Price: 3999
    },
    {
        itemName: "Androdi Dev Course",
        Price: 4999
    },
    {
        itemName: "DevOps Course",
        Price: 5999
    },
    {
        itemName: "iOS Dev Course",
        Price: 4499
    }
]

const result = myObj.reduce( (acc,curr) => {
    return acc + curr.Price
},0)

console.log(result);