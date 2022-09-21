import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

CountProduct.propTypes = {};

function CountProduct(props) {
  return (
    <>
      <div className="count-product">
        <button className=" btn-count btn-increment">
          <i class="fa-solid fa-minus"></i>
        </button>
        <input className=" btn-count input-count" type="text" value={1} />
        <button className="btn-count btn-decrement">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
}

export default CountProduct;
