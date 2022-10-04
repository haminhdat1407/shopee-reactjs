export const convertPrice = (price) => {
  // if (price) return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  if (price) {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 7 };
    return new Intl.NumberFormat('vi-VN', config).format(price * 20000);
  }
};
export const convertPriceDisCount = (discountPercentage, price) => {
  const discount = price * (discountPercentage / 100);
  return price - discount;
};
export const roundingPercentDiscount = (percent) => {
  return Math.round(percent);
};

export const totalPriceProduct = (amout, price) => {
  return amout * price;
};
