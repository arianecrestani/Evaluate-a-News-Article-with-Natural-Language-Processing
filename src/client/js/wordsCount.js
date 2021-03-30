const wordsCount = (inputText) => {
  let wordCount = 0;

  // "be nice "
  inputText.split(" ").forEach((element) => {
      if(element !== "") {
        wordCount++;
      }
  });

  return wordCount;
};

export { wordsCount as wordsCount };
