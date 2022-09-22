import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import productApi from '../api/productApi';
import Banner from '../components/Banner';
import FilterByCategory from '../features/Product/components/Filters/FilterByCategory';
import ProductList from '../features/Product/components/ProductList';
import { setProductList } from './productSlice';

ListPage.propTypes = {};

function ListPage(props) {
  // const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  //get All product
  useEffect(() => {
    try {
      (async () => {
        const data = await productApi.getAll();
        // setProductList(data);
        dispatch(setProductList(data));
      })();
    } catch (error) {
      console.log('Failed to fetch product list:', error);
    }
  }, []);

  //get all category
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
    </div>
  );
}

export default ListPage;
