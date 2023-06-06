const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius () tests written by Kyle Haesler", () => {
  it("should translate letters i and j to 42 when encoding", () => {
    const input = "thinkful jello";
    const expected = "4432423352125413 4251131343";
    const actual = polybius(input);
    expect(actual).to.equal(expected);
  });
  it("should translate 42 to (i/j) when decoding", () => {
    const input = "4432423352125413";
    const expected = "th(i/j)nkful";
    const actual = polybius(input, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    const input1 = "HeLlO WOrLd";
    const input2 = "hello world";
    const actual1 = polybius(input1);
    const actual2 = polybius(input2);
    expect(actual1).to.equal(actual2);
  });
  describe("the function should maintain spaces in the message, before and after encoding or decoding", () => {
    it("should maintain spaces in the message while encoding", () => {
      const input = " Hello World";
      const expected = " 3251131343 2543241341";
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
    it("should maintain the spaces in the message while decoding", () => {
      const input = " 3251131343 2543241341";
      const expected = " hello world";
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });
});
