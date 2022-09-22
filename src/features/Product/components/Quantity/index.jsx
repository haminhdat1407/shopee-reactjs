import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setQuantity } from '../../../Cart/cartSlice';
import './style.scss';

QuantityProduct.propTypes = {};

function QuantityProduct() {
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
        <button className="btn-count btn-decrement" onClick={handleDecrement}>
          <i class="fa-solid fa-minus"></i>
        </button>
        <input className=" btn-count input-count" type="text" value={inputValue} />

        <button className="btn-count btn-increment" onClick={handleIncrement}>
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
}
export default QuantityProduct;
