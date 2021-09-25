export const beerAmountCount = (temp, guests) => {
  let quantity;

  if (temp < 20) {
    quantity = (guests * 0.75) / 6;
  } else if (temp >= 20 && temp < 24) {
    quantity = guests / 6;
  } else {
    quantity = (guests * 3) / 6;
  }

  return Math.ceil(quantity);
};
