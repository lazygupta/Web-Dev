// const fs = require('fs');

// fs.writeFile("hey.text" , "Hey hello" , (err) => {
//     if(err) console.err(err);
//     else console.log("done");
// })



// ..................app...........
// const http = require('http');

// const server = http.createServer(function(req,res){
//     res.end("Hello World")
// })

// server.listen(3000);


// .......................

const express = require('express')
const app = express()

app.use((req,res,next) => { // Run once before going to route server
  console.log("middleware chala");
  next(); // next() redirects to the next fucntion just next
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)