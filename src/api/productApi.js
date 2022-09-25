import axiosClient from './axiosClient';

const productApi = {
  getAll(limit, skip) {
    const url = `/?limit=${limit}&skip=${skip}`;
    return axiosClient.get(url);
  },
  getSingleProduct(idProduct) {
    const url = `https://dummyjson.com/products/${idProduct}`;
    return axiosClient.get(url);
  },
  getAllCategory() {
    const url = 'https://dummyjson.com/products/categories';
    return axiosClient.get(url);
  },
  getProductByCategory(categoryName) {
    const url = `https://dummyjson.com/products/category/${categoryName}`;
    return axiosClient.get(url);
  },
  getSearchProductByName(searchValue) {
    const url = `https://dummyjson.com/products/search?q=${searchValue}`;
    return axiosClient.get(url);
  },
};
export default productApi;
