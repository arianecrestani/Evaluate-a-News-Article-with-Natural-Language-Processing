const checkForName = (inputText) => {

    const negativWord = [
        "fuck",
        "asshole",
        "idiot",
        "motherfucker",
        "ass"
    ]

    if(negativWord.includes(inputText)) {  
        return true;
    }
    return false;
}

export {checkForName}
