const { MENUS, DOUBLE_ORDER_MENU_LIST } = require("./constant");

const calculate = (menus = [], isMember = false) => {
  const duplicateMenu = menus.filter(
    (menu, index) => menus.indexOf(menu) !== index
  );

  const shoudDoubleMenuPromotionApplied = duplicateMenu.find((menu) =>
    DOUBLE_ORDER_MENU_LIST.menus.includes(menu)
  );

  const totalPrice = sumPrice(menus);

  if (shoudDoubleMenuPromotionApplied) return addDiscountForDoubleOrder(totalPrice);

  return totalPrice;
};

const addDiscountForDoubleOrder = (totalPrice) => {
  return (
    totalPrice - (totalPrice / 100) * DOUBLE_ORDER_MENU_LIST.discountPercentage
  );
};

const sumPrice = (menus = []) => {
  return menus.reduce((acc, current) => acc + menuPriceMapper(current), 0);
};

const menuPriceMapper = (menu) => {
  const result = MENUS.find((menuData) => menuData.name === menu).price;
  return result;
};

module.exports = {
  calculate,
  sumPrice,
};
