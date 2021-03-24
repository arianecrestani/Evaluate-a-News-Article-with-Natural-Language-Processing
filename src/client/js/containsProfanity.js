const containsProfanity = (inputText) => {

    const profanityWord = [
        "fuck",
        "asshole",
        "idiot",
        "motherfucker",
        "ass"
    ]
    

    if(profanityWord.includes(inputText)) {  
        return true;
    }
    return false;

}
    
export {containsProfanity}
