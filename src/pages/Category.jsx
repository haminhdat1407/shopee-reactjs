import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import productApi from '../api/productApi';
import Product from '../features/Product/components/Product';
import './style.scss';

Category.propTypes = {};

function Category(props) {
  const location = useLocation();
  const { categoryName } = location.state;
  const [category, setCategory] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const data = await productApi.getProductByCategory(categoryName);
        setCategory(data.products);
      })();
    } catch (error) {
      console.log('Failed to fetch product list:', error);
    }
  }, []);
  return (
    <div className="grid ">
      <div className="category-name">{categoryName}</div>

      <div className="row-category">
        {category.map((product) => (
          <div className="col" key={product.id}>
            <Product product={product} />
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default Category;
