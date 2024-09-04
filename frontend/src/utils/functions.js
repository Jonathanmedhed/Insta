export const formatNumber = (number) => {
  let formatted = number;
  if ((number >= 1000) & (number < 1000000)) {
    formatted = formatted / 1000;
    formatted = parseFloat(formatted).toFixed(1).toString() + 'k';
  } else if ((number >= 1000000) & (number < 1000000000)) {
    formatted = formatted / 1000000;
    formatted = parseFloat(formatted).toFixed(1).toString() + 'm';
  } else if (number > 1000000000) {
    formatted = formatted / 1000000000;
    formatted = parseFloat(formatted).toFixed(1).toString() + 'b';
  }
  return formatted;
};

export const formatNumberFull = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
