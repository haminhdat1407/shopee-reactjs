import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';

Auth.propTypes = {};

function Auth(props) {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Auth;
