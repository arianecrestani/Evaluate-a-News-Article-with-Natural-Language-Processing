//dependecias

const createExpressApp = () => {
    const express = require('express')
    const cors = require("cors");
    const fetch = require('node-fetch');  

    const app = express()

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(express.static('dist'))
    app.use(cors());

    console.log(__dirname)
    return app;
}

const app = createExpressApp();

const dotenv = require('dotenv');
dotenv.config();
const baseUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}`;

//end point é um metodo do servidor tipo rota 

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/submit', function (req, res) {
    const mockAPIResponse = require('./mockAPI.js')
    res.send(mockAPIResponse)
})
