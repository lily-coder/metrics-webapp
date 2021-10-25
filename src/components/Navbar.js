/* eslint-disable consistent-return */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md/index';

const Navbar = (props) => {
  const navCheck = () => {
    if (props.txt !== 'Home') {
      return (
        <Link to='/'>
          {<MdOutlineKeyboardArrowLeft />}
        </Link>
      );
    }
  };
  return (
    <div className='nav'>
      <div>{navCheck()}</div>
      <div className='nav-header'>
        <Link to='/'>{'COVID-19 STATS'}</Link>
      </div>
      <div className='nav-icons'>
        <div className='nav-icon-one'><FiSettings /></div>
        <div className='nav-icon-two'><BiMicrophone /></div>
      </div>
    </div>
  );
};

export default Navbar;
