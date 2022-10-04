import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { convertPrice, convertPriceDisCount, totalPriceProduct } from '../../utils/common';
import QuantityProduct from '../Product/components/Quantity';
import { removeFromCart } from './cartSlice';

import './style.scss';

function CartFeature(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const listItemCart = useSelector((state) => state.cartReducer.cartItem);

  const [checkedState, setCheckedState] = useState(new Array(listItemCart.length).fill(false));
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemSelect, setItemSelect] = useState([]);
  const [checkboxChecked, setCheckboxChecked] = useState([]);

  useEffect(() => {
    // check neu tat ca sp deu được check thì sẽ bật selectAll
    checkedState.every((item) => {
      if (item === true) {
        setIsSelectAll(true);
      }
    });

    // check nếu có 1 sp không được check thì tắt selectAll
    checkedState.some((item) => {
      if (item === false) {
        setIsSelectAll(false);
      }
    });

    //lấy tất cả những checkbox đã check
    let listChecked = [];
    checkedState.filter((elem, index) => {
      if (elem === true) {
        listChecked.push(index);
      }
    });
    setCheckboxChecked(listChecked);

    //lấy tất cả những sp cần tính tiền
    let listItemCartSelected = [];
    if (listChecked) {
      listChecked.forEach((item) => {
        listItemCartSelected.push(listItemCart[item]);
      });
    }
    setItemSelect(listItemCartSelected);

    const totalCartItem = listItemCartSelected.reduce((preValue, currentValue) => {
      return (
        preValue +
        totalPriceProduct(
          Number(currentValue.quantity),
          convertPriceDisCount(currentValue.data?.discountPercentage, currentValue.data?.price)
        )
      );
    }, 0);
    setTotalPrice(totalCartItem);
  }, [checkedState, isSelectAll]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  const handleSelectAll = (e) => {
    setIsSelectAll(!isSelectAll);
    setCheckedState(checkedState.fill(!isSelectAll));
  };

  const handleToProduct = () => {
    navigate('/');
  };

  const handleDeleteCart = (item) => {
    // const currentIndexDelete = listItemCart.findIndex((data) => {
    //   return data.id === item.id;
    // });
    const actionDeleteCart = removeFromCart({ id: item.id });
    dispatch(actionDeleteCart);
  };
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
            Tiếp Tục Mua Sắm
          </button>
        </div>
      ) : (
        <>
          <div className="header-cart">
            <div className="header-left">
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
            {listItemCart.map((item, index) => (
              <>
                <div className="container-cart" key={item.id}>
                  <div className="container-left">
                    <input
                      className="container-checkbox"
                      type="checkbox"
                      id={item.id}
                      name="container-product"
                      value={item.title}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <div className="image-product">
                      <img className="img" src={item.data?.thumbnail} alt="img-product" />
                    </div>
                    <div className="name-product">{item.data?.title}</div>
                  </div>
                  <div className="container-right">
                    <div className="container-price">
                      {convertPrice(
                        convertPriceDisCount(item.data.discountPercentage, item.data.price)
                      )}
                    </div>
                    <div className="container-count">
                      <QuantityProduct quantityItem={item.quantity} />
                    </div>
                    <div className="container-amount">
                      {convertPrice(
                        totalPriceProduct(
                          Number(item.quantity),
                          convertPriceDisCount(item.data.discountPercentage, item.data.price)
                        )
                      )}
                    </div>
                    <div className="container-delete">
                      <i className="fa-solid fa-trash " onClick={() => handleDeleteCart(item)}></i>
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
                  name="check-all"
                  value="container-product"
                  onChange={handleSelectAll}
                  checked={isSelectAll}
                />
                <span> Chọn tất cả</span>
              </div>
              <div className="footer-right">
                <div> Tổng thanh toán ( {itemSelect.length} sản phẩm): </div>
                <span className="total">{convertPrice(totalPrice) || 0}</span>
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
