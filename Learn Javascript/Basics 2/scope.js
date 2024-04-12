var c= 300

if(true) {
    let a = 10
    const b = 20 
    var c = 30
} 

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Ankit"

    function two() {
        var website = "youtube"
        console.log(username)
    }

    // console.log(website) // This will not run because website is having a block scope in function two only

    two()
}

// one()
console.log(addone(5))

addone(5) // This will be without any error because it is initialized at later stage
function addone(num){
    return num + 1;
}


// addtwo(5) // In this we will get error because the function is hold in a value
const addtwo = function(num){
    return num + 1
}

// addtwo(5)