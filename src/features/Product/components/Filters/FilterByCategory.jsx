import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

FilterByCategory.propTypes = {};

function FilterByCategory({ data }) {
  const imgDefault = [
    'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
    'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
    'https://dummyjson.com/image/i/products/13/thumbnail.webp',
    '	https://dummyjson.com/image/i/products/19/thumbnail.jpg',
    'https://i.imgur.com/FHSfriE.png',
    'https://i.imgur.com/liKhipt.png',
    'https://i.imgur.com/0LHNZsP.png',
    'https://dummyjson.com/image/i/products/36/thumbnail.jpg',
    'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
    'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn',
    'https://dummyjson.com/image/i/products/54/thumbnail.jpg',
    'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
    'https://dummyjson.com/image/i/products/62/thumbnail.jpg',
    'https://dummyjson.com/image/i/products/68/thumbnail.webp',
    'https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
    'https://dummyjson.com/image/i/products/78/thumbnail.jpg',
    'https://dummyjson.com/image/i/products/84/thumbnail.jpg',
    'https://dummyjson.com/image/i/products/86/thumbnail.jpg',
    'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn',
    'https://dummyjson.com/image/i/products/97/thumbnail.jpg',
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
