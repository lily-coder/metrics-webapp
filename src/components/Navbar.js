/* eslint-disable consistent-return */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const navCheck = () => {
    if (props.txt !== 'Home') {
      return (
        <Link to='/'>
          {'<'}
        </Link>
      );
    }
  };
  return (
    <div className='nav'>
      <div>{navCheck()}</div>
      <div className='nav-header'>
        <Link to='/'>{'COVID-19 AFRICA STATISTICS'}</Link>
      </div>
    </div>
  );
};

export default Navbar;
