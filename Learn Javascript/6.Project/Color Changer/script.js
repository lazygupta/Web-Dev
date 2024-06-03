const body = document.querySelector('body')
// console.log(body);

const buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        if(e.target.id == buttons[0].id){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id == buttons[1].id){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id == buttons[2].id){
            body.style.backgroundColor= e.target.id;
        }
        if(e.target.id == buttons[3].id){
            body.style.backgroundColor= e.target.id;
        }
    })
}) 

// Or

// buttons.forEach( (button) => {
//     console.log(button);
//     button.addEventListener('click', (e) => {
//         body.style.backgroundColor= e.target.id;
//     })
// }) 