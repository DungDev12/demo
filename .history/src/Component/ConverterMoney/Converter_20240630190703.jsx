export const ConverterMoney = (str, characters, unit) => {
  if (!str) {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, characters);
  } else {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, characters) + " " + unit;
  }
};

export const hidePhone = (str) => {
  return str.replace(str.slice(-4), "****");
};
