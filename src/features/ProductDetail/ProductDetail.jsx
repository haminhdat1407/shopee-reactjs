import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { convertPrice } from '../../utils/common';
import { addToCart } from '../Cart/cartSlice';
import CountProduct from '../Product/components/Count';
import './style.scss';

function ProductDetail({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const actionAddToCart = addToCart({
      data,
    });
    console.log(data);

    dispatch(actionAddToCart);
  };

  return (
    <div>
      <div className="product ">
        <div className="product-left ">
          <div className="product-detail-img">
            <img className="img" src={data.image} alt={data.title} width="100%" />
          </div>
        </div>
        <div className="product-right ">
          <div className="mgn product-detail-name">{data.title}</div>
          <div className="mgn product-detail-rating">
            <div className=" product-detail-rating-rate product-detail-rating-separate ">
              {data.rating?.rate} Đánh giá
            </div>
            <div className="product-detail-rating-count">{data.rating?.count} Đã bán</div>
          </div>
          <div className="mgn product-detail-price">{convertPrice(data.price)}</div>
          {/* <div className="mgn product-voucher"> Mã giảm giá của shop</div> */}
          <div className=" mgn amount">
            <span>Số lượng: </span>
            <div>
              <CountProduct />
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
    </div>
  );
}

export default ProductDetail;
