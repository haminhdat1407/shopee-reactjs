import React from 'react';
import './style.scss';

FilterByCategory.propTypes = {};

function FilterByCategory() {
  return (
    <div className="filter-by-category">
      <div className="header-category">
        <div className="header-category_title">DANH MỤC</div>
      </div>

      <div className="category-container">
        <ul className="category-item-list">
          <li className="category-item">
            <div className="container-img">
              <img
                className="container-img-filter"
                src="https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn"
                alt=""
              />
            </div>
            <div className="container-name-category">Ten san pham</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterByCategory;
