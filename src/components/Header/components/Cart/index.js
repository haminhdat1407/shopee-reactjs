import React from 'react';
import PropTypes from 'prop-types';
import './cart.scss';
import { useNavigate } from 'react-router-dom';

Cart.propTypes = {};

function Cart(props) {
  let navigate = useNavigate();

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <div className="header__cart" onClick={handleCart}>
      <div className="header__cart-wrap">
        <i className="header__cart-icon fas fa-shopping-cart"></i>
        <span className="header__cart-notice">3</span>

        {/* <!-- No cart: header__cart-list--no-cart --> */}
        <div className="header__cart-list">
          <img src="./assets/img/no-cart.png" alt="" className="header__cart-no-cart-img" />
          <span className="header__cart-list-no-cart-msg">Chưa có sản phẩm</span>
          <h4 className="header__cart-heading">Sản Phẩm Đã Thêm</h4>
          <ul className="header__cart-list-item">
            {/* <!-- Cart item --> */}
            <li className="header__cart-item">
              <img
                src="https://bizweb.dktcdn.net/100/397/302/products/5.png?v=1596377989413"
                alt=""
                className="header__cart-img"
              />
              <div className="header__cart-item-info">
                <div className="header__cart-item-head">
                  <h5 className="header__cart-item-name">Balo cầu lông Yonex</h5>
                  <div className="header__cart-item-price-wrap">
                    <span className="header__cart-item-price">750.000 đ</span>
                    <span className="header__cart-item-multiply">x</span>
                    <span className="header__cart-item-qnt">2</span>
                  </div>
                </div>
                <div className="header__cart-item-body">
                  <span className="header__cart-item-description">Phân loại: Balo</span>
                  <span className="header__cart-item-remove">Xóa</span>
                </div>
              </div>
            </li>
          </ul>
          <a href="#" className="header__cart-view-cart btn btn--primary">
            Xem giỏ hàng
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
