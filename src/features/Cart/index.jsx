import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useSelector } from 'react-redux';
import { convertPrice } from '../../utils/common';

CartFeature.propTypes = {};

function CartFeature(props) {
  const listItemCart = useSelector((state) => state.cartReducer.cartItem);
  console.log(listItemCart);

  return (
    <div className="gird">
      <div className="header-cart">
        <div className="header-left">
          <input
            className="product-checkbox"
            type="checkbox"
            id="product"
            name="product"
            value="product"
          />
          <div className="product-name">Sản Phẩm</div>
        </div>
        <div className="header-right">
          <div className="product-price">Đơn Giá</div>
          <div className="product-count">Số Lượng</div>
          <div className="product-amount">Số Tiền</div>
          <div className="product-manipulation">Thao Tác</div>
        </div>
      </div>
      {listItemCart.map((item) => (
        <div className="container-cart">
          <div className="container-left">
            <input
              className="container-checkbox"
              type="checkbox"
              id="container-product"
              name="container-product"
              value="container-product"
            />
            <div className="image-product">
              <img className="img" src={item.data?.image} alt="img-product" />
            </div>
            <div className="name-product">{item.data?.title}</div>
          </div>
          <div className="container-right">
            <div className="container-price">{convertPrice(item.data?.price)}</div>
            <div className="container-count">1</div>
            <div className="container-amount">150.000</div>
            <div className="container-delete">
              <button className="delete-product">Xóa</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartFeature;
