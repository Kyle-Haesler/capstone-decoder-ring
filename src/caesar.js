// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    let result = [];
    if (!encode) shift = -shift;

    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i].toLowerCase())) {
        let inputIndex = alphabet.indexOf(input[i].toLowerCase());
        let shiftedIndex = inputIndex + shift;

        if (shiftedIndex >= alphabet.length) {
          shiftedIndex = shiftedIndex - alphabet.length;
        } else if (shiftedIndex < 0) {
          shiftedIndex = shiftedIndex + alphabet.length;
        }

        result.push(alphabet[shiftedIndex]);
      } else {
        result.push(input[i].toLowerCase());
      }
    }

    return result.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
