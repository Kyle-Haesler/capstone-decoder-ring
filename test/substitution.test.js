const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution () tests written by Kyle Haesler", () => {
  describe("the function should correctly handle improper inputs", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
      const input = "thinkful";
      const alphabet = "abcdefghijklmno";
      const expected = false;
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
    it("should return false if there are any duplicate characters in a given alphabet", () => {
      const input = "thinkful";
      const alphabet = "abcdefghijklmnopqrstuvwxab";
      const expected = false;
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
  });
  describe("the function should correctly translate the given phrase based on the alphabet given while maintaining spaces and ignoring capital letters", () => {
    it("should correctly encode the given phrase based on the alphabet given", () => {
      const input = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "jrufscpw";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
    it("should correctly decode the given phrase based on the alphabet given", () => {
      const input = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = "thinkful";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("should correctly encode the given phrase while maintaining spaces", () => {
      const input = " You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = " elp xhm xf mbymwwmfj dne";
      const actual = substitution(input, alphabet);
      expect(actual).to.equal(expected);
    });
    it("should correctly decode the given phrase while maintaining spaces", () => {
      const input = " elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const expected = " you are an excellent spy";
      const actual = substitution(input, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters, resulting in the same message", () => {
      const input1 = "THInKFuL";
      const input2 = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual1 = substitution(input1, alphabet);
      const actual2 = substitution(input2, alphabet);
      expect(actual1).to.equal(actual2);
    });
  });
});
