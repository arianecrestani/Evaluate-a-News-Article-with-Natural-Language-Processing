//dependecias

const { urlencoded } = require('express')
const fetch = require('node-fetch');  

const getMeaningCloud = async (url) => {
    const baseUrl = `https://api.meaningcloud.com/sentiment-2.1`;
    return await fetch(`${baseUrl}?key=${process.env.API_KEY}&lang=en&txt=${url})`, {
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
   
const formatedData = (data) => {
    var score_text = data.score_tag;
    if (data.score_tag === "P+") {
        answer = "strong positive";
      } else if (data.score_tag === "P") {
        answer = "positive";
      } else if (data.score_tag === "NEU") {
        answer ="neutral";
      } else if (data.score_tag === "N") {
        answer = "negative";
      } else if (data.score_tag === "N+") {
        answer = " strong negative";
      }else if (data.score_tag === "NONE") {
        answer = "without sentiment";

        return answer;
    }   
    result = {
        "model": data.model,
        "score_tag":  score_text,
        "confidence": data.confidence
    },
};
function updateUI(sentiment) {
    console.log(sentiment);
  
    const model = document.getElementById("model");
    const score = document.getElementById("score");
    const confidence = document.getElementById("confidence");
  
    model.innerHTML = sentiment.model ? sentiment.model : "";
    score.innerHTML = sentiment.score ? sentiment.score : "";
    confidence.innerHTML = sentiment.confidence ? sentiment.confidence : "";
}

app.post('/submit', function (req, res) {
    // fazer um request para o meaningcloud e mandar a informacao formatada no res.send
    console.log(req.body);
    getMeaningCloud(req.body)
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