console.log("Hello Ankit");

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

const person = {
    name1: 'Johnny Depp' ,
    name2: 'DiCaprio',
    age: '20',
    Blood_Group: 'B+',
    phone: '91-4201-6559'
}

// console.log(person.age)
// console.log(person.name1)
// console.log(person['name2'])

// console.log(person)

const introducer = (name , age) => {

    const person = {
        name: name + ' Gupta',
        age: age + ' Years'
    }

    const intro = `Hi, my name is ${person.name} and my age is ${person.age}`

    return intro
}


console.log(introducer ('Ankit' , 20))