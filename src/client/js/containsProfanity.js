const containsProfanity = (inputText) => {

    const profanityWord = [
        "fuck",
        "asshole",
        "idiot",
        "motherfucker",
        "ass"
    ]

    let contains = false;
    inputText.split(" ").forEach(element => {
        if(profanityWord.includes(element)) {  
            contains = true;
        }    
    });   

    return contains;
}
    
export {containsProfanity}
