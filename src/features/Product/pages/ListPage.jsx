import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import productApi from '../../../api/productApi';

ListPage.propTypes = {};

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const data = await productApi.getAll();
        setProductList(data);
        console.log(data);
      })();
    } catch (error) {
      console.log('Failed to fetch product list:', error);
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     (async () => {
  //       const responeseEmployee = await apiEmployees.getAll();
  //       setEmployeeList(responeseEmployee);
  //     })();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return <ProductList data={productList} />;
}

export default ListPage;
