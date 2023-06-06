// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
    const alphabet = [
      { number: 11, letter: "a" },
      { number: 21, letter: "b" },
      { number: 31, letter: "c" },
      { number: 41, letter: "d" },
      { number: 51, letter: "e" },
      { number: 12, letter: "f" },
      { number: 13, letter: "l" },
      { number: 14, letter: "q" },
      { number: 15, letter: "v" },
      { number: 22, letter: "g" },
      { number: 23, letter: "m" },
      { number: 24, letter: "r" },
      { number: 25, letter: "w" },
      { number: 32, letter: "h" },
      { number: 33, letter: "n" },
      { number: 34, letter: "s" },
      { number: 35, letter: "x" },
      { number: 42, letter: "(i/j)" },
      { number: 43, letter: "o" },
      { number: 44, letter: "t" },
      { number: 45, letter: "y" },
      { number: 52, letter: "k" },
      { number: 53, letter: "p" },
      { number: 54, letter: "u" },
      { number: 55, letter: "z" },
    ];

    let result = "";

    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === "i" || input[i].toLowerCase() === "j") {
          result += 42;
        }
        if (input[i] === " ") {
          result += input[i];
        }
        for (let j = 0; j < alphabet.length; j++)
          if (input[i].toLowerCase() === alphabet[j].letter) {
            result += alphabet[j].number;
          }
      }
    }

    if (!encode) {
      for (let i = 0; i < input.length; i += 2) {
        let inputWithNoSpaces = input.replace(/\s/g, "");
        if (inputWithNoSpaces.length % 2 !== 0) {
          return false;
        }
        if (input[0] === "") {
          i = 1;
        }
        if (input[i] === " ") {
          result += input[i];
          i = i - 1;
        }
        let joinedNumb = Number(input[i] + input[i + 1]);
        for (let j = 0; j < alphabet.length; j++) {
          if (joinedNumb === alphabet[j].number) {
            result += alphabet[j].letter;
          }
        }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
