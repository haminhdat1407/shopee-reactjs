import React from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Auth from './features/Auth';
import CartFeature from './features/Cart';
import ProductFeature from './features/Product';
import './App.css';
import LoginForm from './features/Auth/components/LoginForm';
import RegisterForm from './features/Auth/components/RegisterForm';

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
      </Routes>

      <div className="footer">
        <Footer />
      </div>
      {/* <RegisterForm /> */}
    </div>
  );
}

export default App;
