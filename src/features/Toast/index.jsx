import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

ToastAddToCart.propTypes = {};

function ToastAddToCart(props) {
  return (
    <div className="container-toast">
      <div className="icon-toast">
        <i className="fa-solid fa-circle-check"></i>
      </div>
      <div className="test-toast">sản phẩm đã được thêm vào giỏ hàng</div>
    </div>
  );
}

export default ToastAddToCart;
