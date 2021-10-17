import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className='header-navbar'>
      <div className="header-text">
        <h3>Real-time Air Quality data feed</h3>
      </div>
      <ul className="header-nav-ul">
        <li className="cities">
          <NavLink to='/' exact>Cities</NavLink>
        </li>
        <li className="details">
          <NavLink to='/Details' exact>Details</NavLink>
        </li>
      </ul>
    </nav>
);

export default Navbar;