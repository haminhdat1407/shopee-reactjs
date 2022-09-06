import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import InputSearch from './components/InputSearch';
import './header.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <div className="grid">
      <NavBar />
      <InputSearch />

      {/* <Cart /> */}
    </div>
  );
}

export default Header;
