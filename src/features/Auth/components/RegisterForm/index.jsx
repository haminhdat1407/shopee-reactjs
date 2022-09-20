import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

RegisterForm.propTypes = {};

function RegisterForm(props) {
  return (
    <div>
      <div className="content-form">
        <div className="form">
          <div className="register">Trang Đăng Kí</div>
          <form action="">
            <div className="input-form">
              <span>Tên Người Dùng</span>
              <input type="text" name="" />
            </div>
            <div className="input-form">
              <span>Mật Khẩu</span>
              <input type="password" name="" />
            </div>
            <div className="input-form">
              <span>Nhập Lại Mật Khẩu</span>
              <input type="password" name="" />
            </div>

            <div className="btn">
              <button className="btn-register"> Đăng kí</button>
            </div>
            <div className="footer-form">
              <p>
                Bạn Có Tài Khoản? <a href="#">Đăng nhập</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
