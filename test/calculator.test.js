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
      { menu: ["orange", "orange"], expectedPrice: 228 },
      { menu: ["pink", "pink"], expectedPrice: 152 },
      { menu: ["green", "green"], expectedPrice: 76 },
      {
        menu: [
          "red",
          "green",
          "blue",
          "yellow",
          "pink",
          "purple",
          "orange",
          "orange",
        ],
        expectedPrice: 551,
      },
      {
        menu: ["red", "green", "orange", "pink", "pink"],
        expectedPrice: 351.5,
      },
      {
        menu: ["green", "green", "orange", "orange", "pink", "pink"],
        expectedPrice: 456,
      },
    ])(
      "Should accurately calculate the price when user makes an order",
      ({ menu, expectedPrice }) => {
        expect(calculate(menu, false)).toBe(expectedPrice);
      }
    );
  });

  // describe('Member order', () => {

  // });
});
