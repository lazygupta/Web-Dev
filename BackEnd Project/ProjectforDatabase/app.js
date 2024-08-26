const express = require('express')
const app = express()
const userModel = require('./usermodel');

app.get('/', (req,res) => {
    res.send("hey")
})

app.get('/create',async (req,res) => {
    let createdUser = await userModel.create({
        name: "Ankit Gupta",
        username: "lazygupta",
        email: "harsh@gmail.com"
    })
    res.send(createdUser)
    console.log("Model created");
})

app.get('/read',async (req,res) => {
    let user = await userModel.find()
    res.send(user)
    console.log("Model read");
})

app.get('/update',async (req,res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        {username: "harsh"},
        {name: "Harsh Gupta"},
        {new: true}
    )
    res.send(updatedUser)
    console.log(updatedUser);
})

app.get('/delete', async (req,res) => {
    let users = await userModel.findOneAndDelete({
        username: "harsh"
    })
    res.send(users);
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})