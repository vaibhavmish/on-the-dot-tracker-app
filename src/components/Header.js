import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import onthedot from './white-logo.png'; // Make sure this file exists in src/components

const Header = () => {
  return (
    <div className="header-div">
      <div className="logo">
        <img src={onthedot} alt="On The Dot Logo" />
      </div>
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </div>
  );
};

export default Header;
