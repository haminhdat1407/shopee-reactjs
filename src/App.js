import './App.css';
import Header from './components/Header';
import ProductFeature from './features/Product';
import React from 'react';

function App() {
  return (
    <div className="header">
      <Header />
      <ProductFeature />
    </div>
  );
}

export default App;
