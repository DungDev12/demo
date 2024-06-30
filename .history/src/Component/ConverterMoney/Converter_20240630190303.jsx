export const ConverterMoney = (str, characters, unit) => {
  if (unit != undefined) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, characters);
  } else {
    v;
  }
};

export const hidePhone = (str) => {
  return str.replace(str.slice(-4), "****");
};
