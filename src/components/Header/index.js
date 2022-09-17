import React from 'react';
import InputSearch from './components/InputSearch';
import NavBar from './components/NavBar';
import './header.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <div className="grid">
      <NavBar />
      <InputSearch />
    </div>
  );
}

export default Header;
