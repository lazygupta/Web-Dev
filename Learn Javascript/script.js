// console.log("Hello Ankit");

// food= 20
// tip= 0.2
// tipAmount = food * tip
// fruit = Number(prompt("Amount of food in rupees"))
// tip = Number(prompt("Enter tip %")) / 100
// tipAmount = fruit * tip
// total = fruit + tipAmount
// console.log("Tip amount " ,tipAmount)
// console.log("Neeche total aaega")
// console.log("Total ", total)

// weather = prompt ("What is the weather in your location")

// if(weather == "Rainy"){
//     console.log("Grab your Umbrella")
// }
// else {
//     console.log("Wear Sunglasses")
// }

// function say(name) {
//   // function
//   console.log("Hi " + name + "\n Nice to meet you");
// }

// say("Ankit"); // function Call

// const sum = (a,b) => {
//     return a+b
// }

// console.log(sum(5,6))

// const fruits = ['Apple','Banana','Mango']

// console.log(fruits)

// fruits.push('Pear')
// console.log(fruits.slice(1,3))

// #Objects

// const person = {
//   name1: "Johnny Depp",
//   name2: "DiCaprio",
//   age: "20",
//   Blood_Group: "B+",
//   phone: "91-4201-6559",
// };

// console.log(person.age)
// console.log(person.name1)
// console.log(person['name2'])

// console.log(person)

// const introducer = (name , age , sal , spend) => {

//     const person = {
//         name: name ,
//         age: age + ' Years',
//         salary : sal,
//         spends: spend,
//         savings : function() {
//             return person.salary - person.spends
//         }
//     }

//     const intro = `Hi, my name is ${person.name}\nAge is ${person.age}\nSavings is ${person.savings()}`

//     return intro
// }

// console.log(introducer ('Ankit' , 21 , 20000 , 5000))
// console.log(introducer ('Arya' , 20 , 60000 , 20000 ))

// const double = (numbers) => {
//   let result = []
//   for (const number of numbers) {
//     result.push(number * num)
//   }

//   return result
// }

// let num = prompt("Enter the number")

// const temp = double([1, 2, 3, 4, 5, 6],num)

// console.log(temp);


// const phrase = "My name is ankit and my college name is cucek"

// const display = (phrase) =>{
//   var res = []

//   const word = phrase.split(' ')

//   for( const w of word){
//     res.push(w)
//   }


//   return res
// }

// console.log(display(phrase));
// let res = prompt("What is that")
// let final = display(res)

// const sumArray = (numbers) =>{
//   let result =0;
//   for(num of numbers){
//     console.log(num)
//     result+=num;
//   }
//   return {Sum : result}
// }

// const number = [1,2,3,4,5]

// console.log(sumArray(number))


// Test you code by forking this repl: 
// 👉 https://replit.com/@CleverLance/ConvertHoursToSeconds#solution.js

// Solution 👉 https://www.loom.com/share/3de1aa5d007047ef82652530f04600b1

// Write a function that takes a parameter (hours) and converts
// it to seconds

// let hour = prompt("Enter the hours")

// const howManySeconds =(hours) => {

//   return hours*60*60
// }

// console.log(`The hours to seconds = ${howManySeconds(hour)}`);

//Topics: Variables,functions, Math

// const res[] = "Ankit Arya Ankit Ankit kir"

// const frequency = (phrase) => {
//   let freq = {}
//   for( const letter of phrase){
//     if(letter in freq) freq[letter]+=1
//     else freq[letter] = 1 
//   }
//   return freq
// }


// const wordFrequency = (sentence ) => {
//   const words = sentence.split(' ')
//   return frequency(words)
// }


// console.log(wordFrequency(res))

// .map()

[1, 2, 4, 5, 6, 7].map(number => {
  // console.log(number)
})


// .filter()

const nums = [1, 2, 3, 5, 6, 78, 9]
nums.filter(num => num >=2 && num<=8)

const actors = [
  {name: 'johnny', networth: 200000},
  {name: 'Ankit', networth:7000},
  {name: 'Leo', networth:1000000},
  {name: 'Leos', networth:234000},
  {name: 'Leon', networth:46000},
  {name: 'Leom', networth:770000},
  {name: 'Leok', networth:723000},
  {name: 'Leou', networth:70070}
]

const func = (actors) => {
  let res = []
  actors.filter( num => {
    if(num.networth < 1000000000){
      res.push(`${num.name}: ${num.networth}`)
    }
  })
  return res
}

let result = func(actors)
console.log(result)

// let names = result.map (actor => actor).join(', ')
// app.innerHTML = `<h1>${names}</h1>`

