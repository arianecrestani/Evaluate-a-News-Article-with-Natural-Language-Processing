//dependecias

const { urlencoded } = require('express')
const fetch = require('node-fetch');  

const getMeaningCloud = async (url) => {
    console.log(url);
    const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
    return await fetch(`${baseUrl}?key=${process.env.API_KEY}&of=json&lang=en&txt=${url})`, {
        method: 'POST'
    })
    .then((response) => response.json())
    .catch((error) => console.log(error)); // continuacao de criando uma URL
};

const createExpressApp = () => {
    const express = require('express')
    const cors = require("cors");
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

//end point é um metodo do servidor tipo rota 

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

app.post('/submit', function (req, res) {
    // fazer um request para o meaningcloud e mandar a informacao formatada no res.send
    getMeaningCloud(req.body.textField)
    .then(data => {
        console.log(data)
        return res.send(data)
    });
//     const mockAPIResponse = require('./mockAPI.js')
//     res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})