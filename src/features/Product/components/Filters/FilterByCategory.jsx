import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

FilterByCategory.propTypes = {};

function FilterByCategory({ data }) {
  const imgDefault = [
    '	https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn',
    '	https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
    '	https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
  ];

  const navigate = useNavigate();
  const handleGetByCategory = (categoryName) => {
    navigate(`/category/${categoryName}`, { state: { categoryName } });
  };
  return (
    <div className="filter-by-category">
      <div className="header-category">
        <div className="header-category_title">DANH MỤC</div>
      </div>

      <div className="category-container">
        <ul className="category-item-list">
          {data.map((item, index) => (
            <li className="category-item" key={index} onClick={() => handleGetByCategory(item)}>
              <div className="container-img">
                <img className="container-img-filter" src={imgDefault[index]} alt="name" />
              </div>
              <div className="container-name-category">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterByCategory;
