const { calculate } = require("../calculator");

describe("calculate", () => {
  describe("Non-Member order", () => {
    test.each([
      { menu: ["red", "green"], expectedPrice: 90 },
      { menu: ["green", "yellow"], expectedPrice: 90 },
      {
        menu: ["red", "green", "orange", "pink"],
        expectedPrice: 290,
      },
      {
        menu: ["red", "green", "blue", "yellow", "pink", "purple", "orange"],
        expectedPrice: 460,
      },
      { menu: ["red", "red"], expectedPrice: 100 },
      { menu: ["blue", "blue"], expectedPrice: 60 },
      { menu: ["yellow", "yellow"], expectedPrice: 100 },
      { menu: ["purple", "purple"], expectedPrice: 180 },
    ])(
      "Should accurately calculate the price when user makes a purchase without applying any discount from the menu conditions",
      ({ menu, expectedPrice }) => {
        expect(calculate(menu, false)).toBe(expectedPrice);
      }
    );
  });

  // describe('Member order', () => {

  // });
});
