const calculator = require("../calculator");

describe("calculator", () => {
  describe("Non-Member order", () => {
    test("Should accurately calculate the price when user makes a purchase without applying any discount from the menu conditions", () => {
      expect(calculator([], false)).toBe(0);
    });
  });

  // describe('Member order', () => {

  // });
});
