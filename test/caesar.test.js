const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar () tests written by Kyle Haesler", () => {
  describe("shift constraint handling", () => {
    it("should return false if the shift value is equal to 0", () => {
      const input = "thinkful";
      const shift = 0;
      const expected = false;
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is less than -25", () => {
      const input = "thinkful";
      const shift = -26;
      const expected = false;
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is greater than 25", () => {
      const input = "thinkful";
      const shift = 99;
      const expected = false;
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is not present", () => {
      const input = "thinkful";
      const expected = false;
      const actual = caesar(input);
      expect(actual).to.equal(expected);
    });
  });

  describe("The function should ignore capital letters", () => {
    it("should correctly return the same message for inputs that are capitalized versus lowercase", () => {
      const input1 = "THESE MESSAGES SHOULD RETURN THE SAME RESULT";
      const input2 = "these messages should return the same result";
      const shift = 3;
      const actual1 = caesar(input1, shift);
      const actual2 = caesar(input2, shift);
      expect(actual1).to.equal(actual2);
    });
  });

  describe("The function should properly handle shifts that go past the alphabet and retain characters not in the standard alphabet", () => {
    it("should correctly wrap around the alphabet when messages contain letters at the end of the alphabet", () => {
      const input = "Zebra Magazine";
      const shift = 3;
      const expected = "cheud pdjdclqh";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should encode the correct message with proper spacing and extra characters", () => {
      const input = "Zebra!!!!. Magazine";
      const shift = 3;
      const expected = "cheud!!!!. pdjdclqh";
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should decode the correct message with proper spacing and extra characters", () => {
      const input = "cheud!!!!. pdjdclqh";
      const shift = 3;
      const expected = "zebra!!!!. magazine";
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
  });
});
