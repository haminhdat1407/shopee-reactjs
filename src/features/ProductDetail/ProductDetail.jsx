import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertPrice, convertPriceDisCount } from '../../utils/common';
import { addToCart } from '../Cart/cartSlice';
import QuantityProduct from '../Product/components/Quantity';
import ToastAddToCart from '../Toast';
import './style.scss';

function ProductDetail({ data }) {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cartReducer.quantity);
  const [showToast, setShowToast] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image == null) {
      setImage(data?.thumbnail);
    }
  }, [image, data]);

  const handleAddToCart = () => {
    const actionAddToCart = addToCart({
      id: data.id,
      data,
      quantity,
    });
    dispatch(actionAddToCart);
    // const show = setTimeout(() => {
    //   setShowToast(true);
    // }, 1000);
  };

  return (
    <div>
      <div className="product ">
        <div className="product-left ">
          <div className="product-detail-img">
            <img className="img__product" src={image} alt={data?.title} width="100%" />
          </div>
          <div className="product-detail-img-small">
            {data.images?.map((item, index) => (
              <img
                className={` img-small ${image === item ? 'active' : ''}`}
                src={item}
                key={index}
                alt={item.title}
                width="100%"
                onMouseOver={() => {
                  setImage(item);
                }}
              />
            ))}
          </div>
        </div>
        <div className="product-right ">
          <div className="mgn product-detail-name">{data.title}</div>
          <div className="mgn product-detail-rating">
            <div className=" product-detail-rating-rate product-detail-rating-separate ">
              {data?.rating} Đánh giá
            </div>
            <div className="product-detail-rating-count">{data.stock} Đã bán</div>
          </div>
          <div className="mgn product-detail-price">
            <div className="product-detail-price__old">{convertPrice(data.price)}</div>
            <div className="product-detail-price__current">
              {convertPrice(convertPriceDisCount(data?.discountPercentage, data?.price))}
            </div>
          </div>
          <div className=" mgn amount">
            <span>Số lượng: </span>
            <div>
              <QuantityProduct />
            </div>
          </div>
          <div className=" mgn buy-product">
            <button className="btn-buy" onClick={handleAddToCart}>
              Mua Ngay
            </button>
          </div>
        </div>
      </div>
      <div className="product-inf">
        <div className="inf-detail"> Thông tin chi tiết</div>
        <div className="inf-des">{data.description}</div>
      </div>
      {showToast && <ToastAddToCart />}
    </div>
  );
}

export default ProductDetail;
