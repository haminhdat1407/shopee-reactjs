export const convertPrice = (price) => {
  // if (price) return price.toLocaleString('vi', { style: 'currency', currency: 'VND' });
  if (price) {
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9 };
    return new Intl.NumberFormat('vi-VN', config).format(price * 2000);
  }
};
