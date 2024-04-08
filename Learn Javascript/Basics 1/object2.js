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

console.log(regularuser.fullname.userfullname.firstname);