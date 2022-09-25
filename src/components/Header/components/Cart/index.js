import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { convertPrice, convertPriceDisCount } from '../../../../utils/common';
import './cart.scss';

Cart.propTypes = {};

function Cart(props) {
  let navigate = useNavigate();

  const handleCart = () => {
    navigate('/cart');
  };
  const listItemCart = useSelector((state) => state.cartReducer.cartItem);

  return (
    <div className="header__cart" onClick={handleCart}>
      <div className="header__cart-wrap">
        <i className="header__cart-icon fas fa-shopping-cart"></i>
        <span className="header__cart-notice">{listItemCart?.length}</span>

        {/* <!-- No cart: header__cart-list--no-cart --> */}
        <div className="header__cart-list">
          <h4 className="header__cart-heading">Sản Phẩm Đã Thêm</h4>

          {listItemCart?.length === 0 ? (
            <>
              <img
                src="https://foodhub.vn/assets/images/no-cart.png"
                alt=""
                className="header__cart-no-cart-img"
              />
              <div className="header__cart-list-no-cart-msg">Chưa có sản phẩm</div>
            </>
          ) : (
            <div>
              {listItemCart.map((item) => (
                <ul className="header__cart-list-item">
                  {/* <!-- Cart item --> */}
                  <li className="header__cart-item">
                    <img src={item.data?.thumbnail} alt="" className="header__cart-img" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <h5 className="header__cart-item-name">{item.data?.title}</h5>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">
                            {convertPriceDisCount(item.data.discountPercentage, item.data.price)}
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-qnt">{item.quantity}</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <span className="header__cart-item-description">
                          Phân loại: {item.data?.category}
                        </span>
                        <span className="header__cart-item-remove">Xóa</span>
                      </div>
                    </div>
                  </li>
                </ul>
              ))}
              <button className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
