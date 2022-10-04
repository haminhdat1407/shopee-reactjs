import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

Banner.propTypes = {};
const arrImg = [
  'https://cf.shopee.vn/file/a2978808b08b6056ef11ffd52cf53eda_xxhdpi',
  'https://cf.shopee.vn/file/8b1b440c54bc7310a7a9311723b1e97f_xhdpi',
  'https://cf.shopee.vn/file/2854172db5df03c0f9f408ff7d767497_xhdpi',
  'https://cf.shopee.vn/file/a2978808b08b6056ef11ffd52cf53eda_xxhdpi',
  'https://cf.shopee.vn/file/8b1b440c54bc7310a7a9311723b1e97f_xhdpi',
  'https://cf.shopee.vn/file/2854172db5df03c0f9f408ff7d767497_xhdpi',
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoNext = useRef(null);
  // useEffect(() => {
  //   setInterval(() => {
  //     autoNext.current.click();
  //   }, 3000);
  // }, []);
  // const timmer = setTimeout(() => {
  //   autoNext.current.click();
  // }, 5000);
  // setInterval(() => {
  //   setCurrentSlide(currentSlide + 1);
  //   if (arrImg.length - 1 === currentSlide) setCurrentSlide(0);
  // }, 3000);

  const handleClickNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
    if (arrImg.length - 1 === currentSlide) setCurrentSlide(0);
  };
  const handleClickPrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide === 0) setCurrentSlide(arrImg.length - 1);
  };
  return (
    <div className="banner ">
      <div className="banner-left">
        <img className="slide-img" src={arrImg[currentSlide]} alt="banner-left" />
        <div className="prev-btn btn-slide" onClick={handleClickPrevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div ref={autoNext} className="next-btn btn-slide" onClick={handleClickNextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <div className="banner-right">
        <img
          src="https://cf.shopee.vn/file/8b1b440c54bc7310a7a9311723b1e97f_xhdpi"
          alt="banner-shopee"
        />
        <img
          src="https://cf.shopee.vn/file/2854172db5df03c0f9f408ff7d767497_xhdpi"
          alt="banner-shopee"
        />
      </div>
    </div>
  );
}

export default Banner;
