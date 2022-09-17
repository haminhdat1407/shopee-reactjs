import React, { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import Banner from '../components/Banner';
import ProductList from '../features/Product/components/ProductList';

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

  return (
    <div>
      <Banner />
      <ProductList data={productList} />
    </div>
  );
}

export default ListPage;
