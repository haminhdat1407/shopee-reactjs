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
                <a href="" className="footer-item__link">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Shopee Mall
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Hướng dẫn mua hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Giới thiệu</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Giới thiệu
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Tuyển dụng
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Điều khoản
                </a>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Danh mục</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Giày cầu lông
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Vợt cầu lông
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  Balo cầu lông
                </a>
              </li>
            </ul>
          </div>
          <div className="col ">
            <h3 className="footer__heading">Theo dõi</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  <i className="footer-item__icon fab fa-facebook"></i>
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  <i className="footer-item__icon fab fa-instagram"></i>
                  Instagram
                </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">
                  <i className="footer-item__icon fab fa-linkedin"></i>
                  LinkedIn
                </a>
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
                <a href="" className="footer__download-apps-link">
                  <img
                    src="https://shopee-lyart.vercel.app/assets/img/gg_play.png"
                    alt="Google Play"
                    className="footer__download-apps-img"
                  />
                </a>
                <a href="" className="footer__download-apps-link">
                  <img
                    src="https://shopee-lyart.vercel.app/assets/img/app_store.png"
                    alt="App Store"
                    className="footer__download-apps-img"
                  />
                </a>
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
