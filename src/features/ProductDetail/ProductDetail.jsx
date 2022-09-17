import React from 'react';
import './style.scss';

function ProductDetail({ data }) {
  return (
    <div>
      <div className="product ">
        <div className="product-left ">
          <div className="product-detail-img">
            <img src={data.image} alt={data.title} width="100%" />
          </div>
        </div>
        <div className="product-right ">
          <div className="product-detail-name">{data.title}</div>
          <div className="product-detail-rating">
            <div className="product-detail-rating-rate product-detail-rating-separate ">
              {data.rating?.rate} Đánh giá
            </div>
            <div className="product-detail-rating-count">{data.rating?.count} Đã bán</div>
          </div>
          <div className="product-detail-price">{data.price} $</div>
          <div className="amount">
            <span>Số lượng</span>
            <span>3000</span>
          </div>
          <div className="buy-product">
            <button className="btn-buy"> Mua ngay</button>
          </div>
        </div>
      </div>
      <div className="product-inf">
        <div className="inf-detail"> Thông tin chi tiết</div>
        <div className="inf-des">{data.description}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
