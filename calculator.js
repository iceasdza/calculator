const { MENUS } = require("./constant");

const calculate = (menus = [], isMember = false) => {
  return sumPrice(menus);
};

const sumPrice = (menus = []) => {
  return menus.reduce((acc, current) => acc + menuPriceMapper(current), 0);
};

const menuPriceMapper = (menu) => {
  const result =  MENUS.find((menuData) => menuData.name === menu).price;
  return result
};

module.exports = {
  calculate,
  sumPrice,
};
