const { MENU } = require("./constant");

const calculate = (menu = [], isMember = false) => {
  return sumPrice(menu);
};

const sumPrice = (menu = []) => {
  return menu.reduce((acc, current) => acc + menuPriceMapper(current), 0);
};

const menuPriceMapper = (menu) => {
  const result =  MENU.find((menuData) => menuData.name === menu).price;
  return result
};

module.exports = {
  calculate,
  sumPrice,
};
