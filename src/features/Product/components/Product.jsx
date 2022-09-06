import React from 'react';
import PropTypes from 'prop-types';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  return <div className="product">{/* <img src={product.image} alt="" width="100%" /> */}</div>;
}

export default Product;
