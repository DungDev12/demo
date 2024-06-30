export const ConverterMoney = (str, characters, unit) => {
  if(unit != undefined){
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, characters);
  }
  if (!str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, characters);
  } else {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, characters) + " " + unit;
  }
};

export const hidePhone = (str) => {
  return str.replace(str.slice(-4), "****");
};
