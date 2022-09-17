import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from '../../pages/DetailPage';
import ListPage from '../../pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature() {
  return (
    <div className="grid">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default ProductFeature;
