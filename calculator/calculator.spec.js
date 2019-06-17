const calculator = require("./calculator.js");

describe("calculator.js", () => {
  describe("add", () => {
    // add two numbers
    it("Should return the sum of two numbers", () => {
      expect(calculator.add(2, 2)).toBeDefined();
      expect(calculator.add(2, 2)).toBe(4);
      expect(calculator.add()).toBe(0);
      expect(calculator.add(3)).toBe(3);
    });

    it("Should return variable if only passed on variable", () => {
      const expected = 100;

      const result = calculator.add(100);

      expect(result).toBe(expected);
    });
  });
});
