import React from 'react';
import logo from '../images/NBK_Logo.jpg';

const NavBar = () => {
  return <div className='navbar'>
    <div className='navbar-container'>
      <img className='logo' src={logo} alt='Logo' />
      <div>
        <h1>Nooks Brain Games</h1>
      </div>
    </div>
  </div>
};

export default NavBar;