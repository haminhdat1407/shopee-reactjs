import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CartFeature from './features/Cart';
import ProductFeature from './features/Product';
import Category from './pages/Category';

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="container-home">
        <Routes>
          <Route path="*" element={<ProductFeature />} />
          <Route path="/cart" element={<CartFeature />} />
          {/* <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} /> */}
          <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
