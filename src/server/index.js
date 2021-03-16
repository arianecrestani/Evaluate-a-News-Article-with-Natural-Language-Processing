//dependecias
const dotenv = require('dotenv');
const fetch = require('node-fetch');  
dotenv.config();

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
