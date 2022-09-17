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
};
export default productApi;
