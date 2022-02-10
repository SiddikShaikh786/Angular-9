const express = require('express')

const app = express();

app.get('/', function (request, response) {
    // console.log('request',request); //request to server
    response.send('<h1>Hello World<h1>') //respond from server
})

app.get("/about", (req, res) => {
    res.send("contact me 7338095158")
})

app.get("/contact", (req, res) => {
    res.send("contact me siddikhshaikh786@gmail.com")
})


app.listen(3000, () => {
    console.log('server ruuning on port 3000');
})