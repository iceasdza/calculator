const MENUS = [
  { name: "red", price: 50 },
  { name: "green", price: 40 },
  { name: "blue", price: 30 },
  { name: "yellow", price: 50 },
  { name: "pink", price: 80 },
  { name: "purple", price: 90 },
  { name: "orange", price: 120 },
];

const MEMBERSHIP_DISCOUNT_PERCENTAGE = 10;

const DOUBLE_ORDER_MENU_LIST = {
  menus: ["orange", "pink", "green"],
  discountPercentage: 5,
};

module.exports = {
  MENUS,
  MEMBERSHIP_DISCOUNT_PERCENTAGE,
  DOUBLE_ORDER_MENU_LIST,
};
