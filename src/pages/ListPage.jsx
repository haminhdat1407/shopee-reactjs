import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import productApi from '../api/productApi';
import Banner from '../components/Banner';
import Pagination from '../features/Pagination';
import FilterByCategory from '../features/Product/components/Filters/FilterByCategory';
import ProductList from '../features/Product/components/ProductList';
import { setProductList, setTotalProduct } from './productSlice';

ListPage.propTypes = {};

function ListPage(props) {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  //get All product
  const getProductList = async () => {
    try {
      const data = await productApi.getAll(12, 0);
      console.log(data);
      dispatch(setProductList(data.products));
      dispatch(setTotalProduct(data.total));
    } catch (error) {
      console.log('Failed to fetch product list:', error);
    }
  };
  getProductList();

  useEffect(() => {
    try {
      (async () => {
        const data = await productApi.getAllCategory();
        setCategory(data);
      })();
    } catch (error) {
      console.log('Failed to fetch product list:', error);
    }
  }, []);

  return (
    <div>
      <Banner />
      <FilterByCategory data={category} />
      <ProductList />
      <Pagination />
    </div>
  );
}

export default ListPage;
