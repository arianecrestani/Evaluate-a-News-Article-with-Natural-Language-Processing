import { wordsCount } from "./wordsCount";

// check what text was put into the form field
const textField = document.getElementById("name");

function handleSubmit(event) {
  event.preventDefault();
  
  if (Client.wordsCount(textField.value) < 3) {
    alert("need to be more than 3 words");
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
    body: JSON.stringify({ value: textField.value }), // body data type must match "Content-Type" header
  };

  fetch("http://localhost:8081/submit", request)
    .then((result) => result.json())
    .then((json) => {
      updateUI(formatedData(json));
      console.log(json);
    });
}


// //enter press event
const enterPress = (e) => {
  if (e.key === "Enter") {
    handleSubmit()
  }
};

textField.addEventListener("keypress", enterPress);

function updateUI(res) {

  // cleaning input
  textField.value = "";

  const score = document.getElementById("score");
  const confidence = document.getElementById("confidence");

  score.innerHTML = `Polarity score: ${res.score}`;
  confidence.innerHTML = `Confidence: ${res.confidence}` + "%";
}

const formatedData = (data) => {
  let score_text = data.score_tag;

  if (data.score_tag === "P+") {
    score_text = "strong positive 😍";
  } else if (data.score_tag === "P") {
    score_text = "positive 😁";
  } else if (data.score_tag === "NEU") {
    score_text = "neutral 😶";
  } else if (data.score_tag === "N") {
    score_text = "negative 🙁";
  } else if (data.score_tag === "N+") {
    score_text = " strong negative 😡";
  } else if (data.score_tag === "NONE") {
    score_text = "without sentiment 🤔";
  }

  const result = {
    score: score_text,
    confidence: data.confidence,

  };

  return result;
};

export { handleSubmit };
