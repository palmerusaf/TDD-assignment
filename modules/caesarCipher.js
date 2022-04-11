export function caesarCipher(string) {
  return string.split("").map(shiftLetter).join("");

  function shiftLetter(letter) {
    if (letter === "z") return "a";
    if (letter === "Z") return "A";
    if (isLetter()) return shiftLetterToNextLetter(letter);
    return letter;

    function isLetter() {
      const charCode = letter.charCodeAt();
      const CHAR_CODE_OF_UPPERCASE_A = 64;
      const CHAR_CODE_OF_UPPERCASE_Z = 90;
      const CHAR_CODE_OF_LOWERCASE_A = 97;
      const CHAR_CODE_OF_LOWERCASE_Z = 122;
      const isUpperCaseLetter =
        charCode >= CHAR_CODE_OF_UPPERCASE_A &&
        charCode <= CHAR_CODE_OF_UPPERCASE_Z;
      const isLowerCaseLetter =
        charCode >= CHAR_CODE_OF_LOWERCASE_A &&
        charCode <= CHAR_CODE_OF_LOWERCASE_Z;

      return isUpperCaseLetter || isLowerCaseLetter;
    }
  }

  function shiftLetterToNextLetter(letter) {
    return String.fromCharCode(letter.charCodeAt() + 1);
  }
}
