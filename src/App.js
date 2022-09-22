import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Auth from './features/Auth';
import CartFeature from './features/Cart';
import ProductFeature from './features/Product';
import Category from './pages/Category';

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Routes>
        <Route path="*" element={<ProductFeature />} />
        <Route path="/cart" element={<CartFeature />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/category/:categoryName" element={<Category />} />
      </Routes>

      <div className="footer">
        <Footer />
      </div>
      {/* <RegisterForm /> */}
    </div>
  );
}

export default App;
