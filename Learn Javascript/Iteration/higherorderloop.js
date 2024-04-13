// -------------- for of -----------------

const arr = ["Ankit" , 5, 6, 'T']

// for (const it of arr) {
//     console.log(it);
// }

// const greetings = "Hello World"

// for (const it of greetings) {
//     console.log(`Each character is ${it}`);
// }


const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "Unites States of America")

// console.log(map);

// for (const it of map) {
//     console.log(it);
// }

// for (const [key,value] of map) {
//     console.log(key, ":-" ,value );
// }

const myObj = {
    'game1': "GTAV",
    'game2': "Spiderman"
}

// for (const iterator of myObj) {
//     console.log(iterator); // Object is not iterable with forof
// }

// -------------- for in -----------------

// for (const key in myObj) {
//     console.log(myObj[key]);
// }

// for (const key in myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`);
// }

// for (const key in arr) {
//     console.log(key);
// }


// for (const key in arr) {
//     console.log(arr[key]);
// }

// for (const key in map) {
//    console.log(key); // Map is not iterable with forin
// }


// -------------- for each -----------------

const coding = ["js", "c++", "Python", "java"]

// coding.forEach( function (item) { // Callback function
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printme (item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach( (item,index, arr) => {
//     console.log(item,index,arr);
// } )

const mycoding = [
    {
        langname: "Javascript",
        langfilename: "js"
    },
    {
        langname: "C++",
        langfilename: "cpp"
    },
    {
        langname: "Python",
        langfilename: "py"
    }
]

// mycoding.forEach( (item) => {
//     console.log(item.langname);
// } )

