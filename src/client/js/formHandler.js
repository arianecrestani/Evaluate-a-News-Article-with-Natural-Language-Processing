function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let urlField = document.getElementById("input").value;

  Client.checkForName(urlField);

  //Fetch request
  const request = {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urlField }), // body data type must match "Content-Type" header
  }
  
  fetch("http://localhost:8080/submit", request)
    .then((result) => result.json())
    .then((json) => {
      updateUI(json);
      console.log(json);
    });
}

function updateUI(res) {
  console.log(res);
}

export { handleSubmit };
