import axiosClient from './axiosClient';

const productApi = {
  getAll() {
    const url = '';
    return axiosClient.get(url);
  },
  getSingleProduct(idProduct) {
    const url = `https://fakestoreapi.com/products/${idProduct}`;
    return axiosClient.get(url);
  },
  getAllCategory() {
    const url = 'https://fakestoreapi.com/products/categories';
    return axiosClient.get(url);
  },
  getProductByCategory(categoryName) {
    const url = `https://fakestoreapi.com/products/category/${categoryName}`;
    return axiosClient.get(url);
  },
};
export default productApi;
