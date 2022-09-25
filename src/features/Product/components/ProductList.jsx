import React from 'react';
import Product from './Product';
import './style.scss';
import { useSelector } from 'react-redux';

function ProductList() {
  const data = useSelector((state) => state.productReducer.productList);

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
