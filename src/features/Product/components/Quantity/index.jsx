import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart, setQuantity } from '../../../Cart/cartSlice';
import './style.scss';

QuantityProduct.propTypes = {};

function QuantityProduct({ quantityItem }) {
  // const quantity = useSelector((state) => state.cartReducer.quantity);
  const listItemCart = useSelector((state) => state.cartReducer.cartItem);

  const currentURL = window.location.href;
  const isCartPage = currentURL.includes('/cart');

  const [inputValue, setInputValue] = useState(1);
  let { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setQuantity({
        id,
        quantity: inputValue,
      })
    );
  }, [inputValue]);

  const handleDecrement = () => {
    if (inputValue === 1) return;
    setInputValue(inputValue - 1);
  };

  const handleIncrement = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <>
      <div className="count-product">
        {!isCartPage && (
          <button className="btn-count btn-decrement" onClick={handleDecrement}>
            <i className="fa-solid fa-minus"></i>
          </button>
        )}
        {isCartPage ? (
          <span>{quantityItem}</span>
        ) : (
          <span className=" btn-count input-count ">{inputValue}</span>
        )}
        {!isCartPage && (
          <button className="btn-count btn-increment" onClick={handleIncrement}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )}
      </div>
    </>
  );
}
export default QuantityProduct;
