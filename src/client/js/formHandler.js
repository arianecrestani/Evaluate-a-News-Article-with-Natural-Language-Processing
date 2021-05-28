import { wordsCount } from "./wordsCount";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let textField = document.getElementById("name").value ;


  if (Client.wordsCount(textField) < 3) {
    alert("need to be more than 3 words")
    return;
  }

  //Fetch request
  const request = {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ textField }), // body data type must match "Content-Type" header
  }
  
  fetch("http://localhost:8081/submit", request)
    .then((result) => result.json())
    .then((json) => {
      updateUI(formatedData(json));
      console.log(json);
    });


}

function updateUI(res) {
  console.log(res);
  const irony = document.getElementById("irony");
  const score = document.getElementById("score");
  const confidence = document.getElementById("confidence");

  irony.innerHTML = res.irony ? res.irony : "";
  score.innerHTML = `Polarity score: ${res.score}`;
  confidence.innerHTML = `Confidence: ${res.confidence}`+ '%';


}

const formatedData = (data) => {
  
  let score_text = data.score_tag;

  if (data.score_tag === "P+") {
    score_text = "strong positive";
  } else if (data.score_tag === "P") {
    score_text = "positive";
  } else if (data.score_tag === "NEU") {
    score_text = "neutral";
  } else if (data.score_tag === "N") {
    score_text = "negative";
  } else if (data.score_tag === "N+") {
    score_text = " strong negative";
  } else if (data.score_tag === "NONE") {
    score_text = "without sentiment";
  }   

  const result = {
    "irony": data.irony,  
    "score":  score_text,
    "confidence": data.confidence

  
  }
  
  return result;


};

export { handleSubmit };

