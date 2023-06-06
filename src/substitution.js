// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  

  function substitution(input, alphabet, encode = true) {
    // cipher variable
    const cipher = "abcdefghijklmnopqrstuvwxyz";

    // initial parameter blocker
    if (!alphabet) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }
    const uniqueCheck = [];
    for (let i = 0; i < alphabet.length; i++) {
      if (uniqueCheck.includes(alphabet[i].toLowerCase())) {
        return false;
      } else {
        uniqueCheck.push(alphabet[i].toLowerCase());
      }
    }

    // Encode section
    if (encode) {
      const substitutionArray = [];
      for (let i = 0; i < cipher.length; i++) {
        substitutionArray.push({
          key: cipher[i],
          letter: alphabet[i].toLowerCase(),
        });
      }

      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        }
        for (let j = 0; j < substitutionArray.length; j++) {
          if (input[i].toLowerCase() === substitutionArray[j].key) {
            result += substitutionArray[j].letter;
          }
        }
      }

      return result;
    }
    // Decode Section
    if (!encode) {
      const substitutionArray = [];
      for (let i = 0; i < cipher.length; i++) {
        substitutionArray.push({
          key: cipher[i],
          letter: alphabet[i].toLowerCase(),
        });
      }

      let result = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          result += input[i];
        }
        for (let j = 0; j < substitutionArray.length; j++) {
          if (input[i].toLowerCase() === substitutionArray[j].letter) {
            result += substitutionArray[j].key;
          }
        }
      }

      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
