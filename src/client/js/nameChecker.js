const checkForName = (inputText) => {

    const negativWord = [
        "fuck",
        "asshole",
        "idiot",
        "motherfucker",
        "ass"
    ]

    if(negativWord.includes(inputText)) {
        alert("error")
    }

}

export {checkForName}
