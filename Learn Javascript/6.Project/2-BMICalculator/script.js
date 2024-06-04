const form = document.querySelector('form')
// console.log(form);
// const height = parseInt(document.querySelector('#height').value) 
// If we extract height now then it will be stored with a empty value

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value) // We have to extract values of inputted height
    // console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`
    }

})