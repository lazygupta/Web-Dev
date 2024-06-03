// singleton
// Singleton doenst make when literals are made

// Object Literals

// Object.create()

const mysym = Symbol("Key1") // Symbol creation

const JSUser = {
    name: "Ankit", 
    "full name" : "Ankit Gupta",
    [mysym]: "Symbol Used",
    age: 22,
    location: "Kochi",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(JSUser.age)
// console.log(JSUser["email"])

// console.log(JSUser["full name"])
// console.log(JSUser[mysym])
// console.log(JSUser)

// JSUser.email = "abc@hotmail.com"
// console.log(JSUser)
// Object.freeze(JSUser)
// JSUser.email = "abc@mail.com"
// console.log(JSUser)


// Functions

JSUser.greeting = function(){
    console.log("Hello User");
}

JSUser.greeting2 = function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greeting2());
