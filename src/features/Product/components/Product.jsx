import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { convertPrice, convertPriceDisCount, roundingPercentDiscount } from '../../../utils/common';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  let navigate = useNavigate();

  const handleDetail = (idProduct) => {
    navigate(`/detail/${idProduct}`, { state: { idProduct } });
  };
  return (
    <div className="product-item" onClick={() => handleDetail(product.id)}>
      <div className="product-item__img">
        <img className="product-img" src={product?.thumbnail} alt={product.title} />
      </div>

      <div className="product-item__title">{product.title}</div>
      <div className="product-item__price">
        <div className="product-item__price-old">{convertPrice(product.price)}</div>
        <div className="product-item__price-current">
          {convertPriceDisCount(
            roundingPercentDiscount(product?.discountPercentage),
            product.price
          )}
        </div>
      </div>
      <div className="product-item__action">
        <span className="product-item__rating">Đánh giá {product.rating} </span>
        <span className="product-item__sold">Đã bán {product.stock} </span>
      </div>
      <div className="product-item__favourite">
        <i className="fas fa-check"></i>
        <span>Yêu thích</span>
      </div>
      <div className="product-item__sale-off">
        <span className="product-item__sale-off-percent">
          {roundingPercentDiscount(product?.discountPercentage)}%
        </span>
        <span className="product-item__sale-off-label">GIẢM</span>
      </div>
    </div>
  );
}

export default Product;
