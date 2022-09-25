import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '../../api/productApi';
import { setProductList } from '../../pages/productSlice';
import './style.scss';

Pagination.propTypes = {};

function Pagination(props) {
  const [pageActive, setPageActive] = useState(1);
  const [skip, setSkip] = useState(0);
  const data = useSelector((state) => state.productReducer.totalProduct);
  const getTotalPage = Math.ceil(data / 12);
  const arrPagination = new Array(getTotalPage);
  const dispatch = useDispatch();

  const handleClickPagination = (currentPage) => {
    setSkip((currentPage - 1) * 10);
    setPageActive(currentPage);
  };

  const handleNextPage = () => {
    setSkip(pageActive * 10);
    setPageActive(pageActive + 1);
    console.log(pageActive + 1);
  };
  const handlePrevPage = () => {
    setSkip(pageActive * 10);
    setPageActive(pageActive - 1);
  };
  useEffect(() => {
    const productByPagination = productApi.getAll(12, skip).then((res) => {
      dispatch(setProductList(res.products));
      console.log(res.products);
    });
  }, [pageActive, skip, dispatch]);

  return (
    <div>
      <ul className="pagination home-product__pagination">
        <li
          className={`pagination-item ${pageActive === 1 ? 'disable' : ''} `}
          onClick={handlePrevPage}
        >
          <span className="pagination-item__link">
            <i className="pagination-item__icon fas fa-angle-left"></i>
          </span>
        </li>
        {arrPagination.fill().map((item, index) => (
          <li
            className={`pagination-item ${
              pageActive === index + 1 ? 'pagination-item--active' : ''
            }`}
            onClick={() => {
              handleClickPagination(index + 1);
            }}
          >
            <span className="pagination-item__link">{index + 1}</span>
          </li>
        ))}

        <li
          className={`pagination-item ${pageActive === getTotalPage ? 'disable' : ''} `}
          onClick={handleNextPage}
        >
          <span className="pagination-item__link">
            <i className="pagination-item__icon fas fa-angle-right"></i>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
