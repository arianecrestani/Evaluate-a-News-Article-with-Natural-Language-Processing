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
const { urlencoded } = require('express');
dotenv.config();

//end point é um metodo do servidor tipo rota 

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

const getMeaningCloud = async (text) => {
    const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
    return await fetch(`${baseUrl}?url=${url}&key=${process.env.API_KEY})`, {
        method: 'POST'
    })
    .then((response) => response.json())
    .catch((error) => console.log(error)); // continuacao de criando uma URL
};
   
const formatedData = (data) => {
    var score_text = data.score_tag;
    // 

    var result = {
        "model": data.model,
        "score_tag":  score_text,
        "confidence": data.confidence
    }

    return result
}

app.get('/submit', function (req, res) {
    // fazer um request para o meaningcloud e mandar a informacao formatada no res.send
    console.log(req.body);
    getMeaningCloud(req.body)
    .then(data => res.send(data));
//     const mockAPIResponse = require('./mockAPI.js')
//     res.send(mockAPIResponse)
})