export const convertPrice = (price) => {
  // if (price) return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  if (price) {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    return new Intl.NumberFormat('vi-VN', config).format(price * 20000);
  }
};
export const convertPriceDisCount = (discountPercentage, price) => {
  const discount = price * (discountPercentage / 100);
  const priceCurrent = price - discount;
  if (priceCurrent) {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 8 };
    return new Intl.NumberFormat('vi-VN', config).format(priceCurrent * 20000);
  }
};
export const roundingPercentDiscount = (percent) => {
  return Math.round(percent);
};
