import React from 'react';

import './style.scss';

LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <div className="content-form">
      <div className="form">
        <div className="login">Trang Đăng Nhập</div>
        <form action="">
          <div className="input-form">
            <span>Tên Người Dùng</span>
            <input type="text" name="" />
          </div>
          <div className="input-form">
            <span>Mật Khẩu</span>
            <input type="password" name="" />
          </div>
          <div className="nho-dang-nhap">
            <label>
              <input type="checkbox" name="" /> Nhớ Đăng Nhập
            </label>
          </div>
          <div className="btn">
            <button className="btn-login">Đăng nhập</button>
          </div>
          <div className="footer-form">
            <p>
              Bạn Chưa Có Tài Khoản? <span>Đăng Ký</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
