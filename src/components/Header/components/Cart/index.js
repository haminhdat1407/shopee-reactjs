import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../../../features/Cart/cartSlice';
import { convertPrice, convertPriceDisCount } from '../../../../utils/common';
import './cart.scss';

Cart.propTypes = {};

function Cart(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCart = () => {
    navigate('/cart');
  };
  const listItemCart = useSelector((state) => state.cartReducer.cartItem);
  const handleDeleteCart = (item) => {
    console.log(item.id);
    const actionDeleteCart = removeFromCart({ id: item.id });
    dispatch(actionDeleteCart);
  };
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
                <ul className="header__cart-list-item" key={item.id}>
                  {/* <!-- Cart item --> */}
                  <li className="header__cart-item">
                    <img src={item.data?.thumbnail} alt="" className="header__cart-img" />
                    <div className="header__cart-item-info">
                      <div className="header__cart-item-head">
                        <h5 className="header__cart-item-name">{item.data?.title}</h5>
                        <div className="header__cart-item-price-wrap">
                          <span className="header__cart-item-price">
                            {convertPrice(
                              convertPriceDisCount(item.data?.discountPercentage, item.data?.price)
                            )}
                          </span>
                          <span className="header__cart-item-multiply">x</span>
                          <span className="header__cart-item-qnt">{item.quantity}</span>
                        </div>
                      </div>
                      <div className="header__cart-item-body">
                        <span className="header__cart-item-description">
                          Phân loại: {item.data?.category}
                        </span>
                        <span
                          className="header__cart-item-remove"
                          onClick={() => handleDeleteCart(item)}
                        >
                          Xóa
                        </span>
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
