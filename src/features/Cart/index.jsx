import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useSelector } from 'react-redux';
import { convertPrice } from '../../utils/common';
import { useNavigate } from 'react-router-dom';
import CountProduct from '../Product/components/Count';

CartFeature.propTypes = {};

function CartFeature(props) {
  let navigate = useNavigate();

  const handleToProduct = () => {
    navigate('/');
  };
  const listItemCart = useSelector((state) => state.cartReducer.cartItem);
  console.log(listItemCart);

  return (
    <div className="gird">
      {listItemCart?.length === 0 ? (
        <div className="container-no-cart">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png"
            alt=""
            className="container-no-cart-img"
          />
          <div className="container-no-cart-text">Giỏ hàng của bạn còn trống </div>
          <button className="btn-buy" onClick={handleToProduct}>
            Mua Ngay
          </button>
        </div>
      ) : (
        <>
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
          <div className="container">
            {listItemCart.map((item) => (
              <>
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
                    <div className="container-count">
                      <CountProduct />
                    </div>
                    <div className="container-amount">150.000</div>
                    <div className="container-delete">
                      <button className="delete-product">Xóa</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="footer-cart">
              <div className="footer-left">
                <input
                  className="container-checkbox"
                  type="checkbox"
                  id="container-product"
                  name="container-product"
                  value="container-product"
                />
                <span> Chọn tất cả</span>
              </div>
              <div className="footer-right">
                <div> Tổng thanh toán ( 0 sản phẩm): </div>
                <span className="total"> 0000</span>
                <button className="btn-buy">Mua Ngay</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartFeature;
