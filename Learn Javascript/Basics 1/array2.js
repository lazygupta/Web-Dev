const name = ["Ankit","Arya","Sriya","Papa"]
const relation = ["Myself","Gf","Sister","Father"]

// name.push(relation) // Doesnt concat the array, It adds the array as array itself

// console.log(name);

const myarr = name.concat(relation); // Concat the arrays. It doesnt add the arrays as array just concat it

// console.log(myarr)

const allarr = [...name, ...relation] // New way of concatenating

// console.log(allarr);

const another_array = [1,2,3,[5,6],[7,8,[9,10]]]

const real = another_array.flat(Infinity)
// console.log(another_array);
// console.log(real);


// console.log(Array.isArray(myarr));
// console.log(Array.from("Ankit"));
// console.log(Array.from({name: "Ankit"})); // Output= empty array ,,,,,,Interesting case, as it cant comvert the key value pairs to array, we have to mention

// console.log(Array.of("Ankit","Arya")); // Make multiple items into array
const score1 = 1
const score2 = 2

console.log(Array.of("Ankit","Arya",name,score1,score2).flat(Infinity));

