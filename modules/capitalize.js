export const capitalize = function (string) {
  const isSentence = string.includes(" ");
  return isSentence ? capitalizedEveryWordOfSentence() : capitalizeWord(string);

  function capitalizedEveryWordOfSentence() {
    return string.split(" ").map(capitalizeWord).join(" ");
  }

  function capitalizeWord(word) {
    const firstLetter = word[0];
    const restOfWord = word.slice(1);
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
  }
};
