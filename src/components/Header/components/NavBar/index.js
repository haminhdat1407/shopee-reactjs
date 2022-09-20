import React, { useState } from 'react';
import LoginForm from '../../../../features/Auth/components/LoginForm';
import './navbar.scss';

NavBar.propTypes = {};

function NavBar(props) {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };
  return (
    <div className="header__navbar">
      <ul className="header__navbar-list">
        <li className="header__navbar-item header__navbar-item--separate "> Kênh người bán</li>

        <li className="header__navbar-item header__navbar-item--separate "> Tải ứng dụng</li>
        <li className="header__navbar-item ">
          Kết nối
          <a
            href="https://google.com"
            className="header__navbar-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="header__navbar-icon fab fa-facebook"></i>
          </a>
          <a
            href="https://google.com"
            className="header__navbar-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="header__navbar-icon fab fa-instagram"></i>
          </a>
        </li>
      </ul>

      <ul className="header__navbar-list ">
        <li className="header__navbar-item  ">
          <i className="header__navbar-icon fas fa-bell"></i>
          Thông báo
        </li>
        <li className="header__navbar-item">
          <i className="header__navbar-icon far fa-question-circle"></i>
          Hỗ trợ
        </li>
        <li className="header__navbar-item">
          <i className=" header__navbar-icon  fa fa-thin fa-globe"></i>
          Tiếng Việt
        </li>
        <li className="header__navbar-item header__navbar-item--separate">Đăng kí</li>
        <li className="header__navbar-item" onClick={handleShowForm}>
          Đăng nhập
        </li>
      </ul>
      {showForm && <LoginForm />}
    </div>
  );
}

export default NavBar;
