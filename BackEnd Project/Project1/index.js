const express = require('express')
const app = express()
const path = require('path')

// Setting up parsers
app.use(express.json())
app.use(express.urlencoded({extemded: true}))
app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static((__dirname+'/public')));

app.set('view engine' , 'ejs');


// Setting up a route
app.get('/', (req,res) => {
    res.render("index");
})

app.get('/profile/:username', (req,res) => {
    res.render("index");
})

app.listen(3000, () =>{
    console.log("its running");
});