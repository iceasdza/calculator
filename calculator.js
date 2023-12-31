const {
  MENUS,
  DOUBLE_ORDER_MENU_LIST,
  MEMBERSHIP_DISCOUNT_PERCENTAGE,
} = require("./constant");

const calculate = (menus = [], isMember = false) => {
  validator(menus, isMember);

  let totalPrice = 0;

  const duplicateMenu = menus.filter(
    (menu, index) => menus.indexOf(menu) !== index
  );

  const shoudDoubleMenuPromotionApplied = duplicateMenu.find((menu) =>
    DOUBLE_ORDER_MENU_LIST.menus.includes(menu)
  );

  totalPrice = sumPrice(menus);

  if (shoudDoubleMenuPromotionApplied) {
    totalPrice = addDiscountToOrder(
      totalPrice,
      DOUBLE_ORDER_MENU_LIST.discountPercentage
    );
  }

  if (isMember) {
    totalPrice = addDiscountToOrder(totalPrice, MEMBERSHIP_DISCOUNT_PERCENTAGE);
  }

  return totalPrice;
};

const validator = (menu, isMember) => {
  if (!Array.isArray(menu) || typeof isMember !== "boolean") {
    throw "Invalid variable type";
  }

  if (Array.isArray(menu) && menu.length === 0) {
    throw "Menu is not provided";
  }
};

const addDiscountToOrder = (totalPrice, percentage) => {
  return totalPrice - (totalPrice / 100) * percentage;
};

const sumPrice = (menus = []) => {
  return menus.reduce((acc, current) => acc + menuPriceMapper(current), 0);
};

const menuPriceMapper = (menu) => {
  const result = MENUS.find((menuData) => menuData.name === menu);
  if (result === undefined) {
    throw "Menu is not match";
  }
  return result.price;
};

module.exports = {
  calculate,
};
