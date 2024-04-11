const tinderuser = new Object()

const tinderuser2 = {}

tinderuser.id = "123"
tinderuser.name = "Ankit"

// console.log(tinderuser);

const regularuser = {
    email: "Ankit@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ankit",
            lastname: "Gupta"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 ={
    3: "A",
    4: "B"
}

// const obj3 = {
//     obj1,
//     obj2
// }

// console.log(obj3);

// const obj3 = Object.assign(obj1,obj2) // Concatenate the objects
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// console.log(obj1); // We can see obj1 value is changed as the target value was obj1, So the concatenated object gets copied into obj1 too
// console.log(obj3);

// Assign Object Syntax ---- It Takes two parameters (Source, Target)
// So we should always try to write like this
// const obj4 = Object.assign({},obj1,obj2) // {} this is working as target array or say target object
// console.log(obj4);
// Now the obj1 and obj2 adds to {} empty array 

const obj3 = {...obj1 , ...obj2}
//New way of concatenatin just as array

// console.log(obj3);

const users= [
    {
        id:1,
        email: "ankit1@gmail.com"
    },
    {
        id:2,
        email: "ankit2@gmail.com"
    },
    {
        id:3,
        email: "ankit3@gmail.com"
    },
    {
        id:4,
        email: "ankit4@gmail.com"
    }
]

console.log(users[1].email)
console.log(tinderuser);

console.log(Object.values(tinderuser)); //Displays the values of object in an array
console.log(Object.keys(tinderuser)); // Displays the keys of object in an array
console.log((Object.keys(tinderuser)).length); 

console.log(Object.entries(tinderuser)); // Every key value in array

console.log(tinderuser.hasOwnProperty('id')); // Check for the property is present or not in tinderuser