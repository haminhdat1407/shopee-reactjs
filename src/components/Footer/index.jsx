import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <div className="grid wide footer__content">
        <div className="row-footer">
          <div className="col ">
            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-item__link">Trung tâm trợ giúp</span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">Shopee Mall</span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">Hướng dẫn mua hàng</span>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Giới thiệu</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-item__link">Giới thiệu</span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">Tuyển dụng</span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">Điều khoản</span>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Danh mục</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-item__link">Giày cầu lông</span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">Vợt cầu lông</span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">Balo cầu lông</span>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Theo dõi</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <span className="footer-item__link">
                  <i className="footer-item__icon fab fa-facebook"></i>
                  Facebook
                </span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">
                  <i className="footer-item__icon fab fa-instagram"></i>
                  Instagram
                </span>
              </li>
              <li className="footer-item">
                <span className="footer-item__link">
                  <i className="footer-item__icon fab fa-linkedin"></i>
                  LinkedIn
                </span>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
            <div className="footer__download">
              <img
                src="https://shopee-lyart.vercel.app/assets/img/qr_code.png"
                alt="Download QR"
                className="footer__download-qr"
              />
              <div className="footer__download-apps">
                <span className="footer__download-apps-link">
                  <img
                    src="https://shopee-lyart.vercel.app/assets/img/gg_play.png"
                    alt="Google Play"
                    className="footer__download-apps-img"
                  />
                </span>
                <span className="footer__download-apps-link">
                  <img
                    src="https://shopee-lyart.vercel.app/assets/img/app_store.png"
                    alt="App Store"
                    className="footer__download-apps-img"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="grid wide">
          <p className="footer_text">© 2022 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
