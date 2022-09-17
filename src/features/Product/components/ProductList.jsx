import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './style.scss';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};
function ProductList({ data }) {
  return (
    <div className="row">
      {data.map((product) => (
        <div className="col" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
