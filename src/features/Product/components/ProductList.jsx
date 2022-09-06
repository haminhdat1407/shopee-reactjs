import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};
function ProductList({ data }) {
  return (
    <div>
      {/* {data.map((product) => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))} */}
    </div>
  );
}

export default ProductList;
