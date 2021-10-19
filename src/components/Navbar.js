import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className='header-navbar'>
      <div className="header-text">
        <h3>COVID-19 TRACKING PROJECT</h3>
      </div>
      <ul className="header-nav-ul">
        <li className="cities">
          <NavLink to='/' exact>Home</NavLink>
        </li>
        <li className="details">
          <NavLink to='/Details' exact>Details</NavLink>
        </li>
      </ul>
    </nav>
);

export default Navbar;