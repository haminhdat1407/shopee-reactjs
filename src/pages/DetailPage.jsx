import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import productApi from '../api/productApi';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../features/ProductDetail/ProductDetail';
import './style.scss';

DetailPage.propTypes = {};

function DetailPage(props) {
  const [detail, setDetail] = useState([]);

  //nhan state  từ navigate truyen theo
  const location = useLocation();
  const { idProduct } = location.state;

  useEffect(() => {
    try {
      (async () => {
        const data = await productApi.getSingleProduct(idProduct);
        setDetail(data);
      })();
    } catch (error) {
      console.log('Failed to fetch product list:', error);
    }
  }, []);

  return (
    <div className="product-detail">
      <ProductDetail data={detail} />
    </div>
  );
}

export default DetailPage;
