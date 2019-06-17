const calculator = require("./calculator.js");

describe("calculator.js", () => {
  describe("add", () => {
    // add two numbers
    it("Should return the sum of two numbers", () => {
      const sum = calculator.add(2, 2);
      expect(sum).toBeDefined();
      expect(sum).toBe(4);
    });
  });
});
