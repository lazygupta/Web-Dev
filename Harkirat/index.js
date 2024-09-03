const express = require("express");

const app = express();

let reqCounter=0

function middlewareCheck(req,res,next) {
    reqCounter = reqCounter+1;
    next();
}

app.use(middlewareCheck);

app.get("/", function(req, res) {
    res.send("Hello World")
    console.clear();
    console.log(`Total number of requests sent to a server is ${reqCounter}`)
});

app.get('/reqCheck', (req,res) => {
    console.log(`Total number of requests sent to a server is ${reqCounter}`)
})

app.listen(3002);