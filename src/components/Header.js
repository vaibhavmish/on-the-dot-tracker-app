import React from 'react';
import onthedot from './onthedot.png';
import "./header.css";
import {Link} from 'react-router-dom';

const Header = ()=> {
	return(
       <div className="header-div">
       <img src={onthedot} alt="app logo" width="90"/>
       <h1 className="app-heading">ON THE DOT. TRACKER APP</h1>
       <ul className="nav">
         <li><Link to ="/Dashboard">Home</Link></li>
         <li><Link to ="/users">Users</Link></li>
         <li>Sign in?</li>
        </ul> 
       </div>

	);
};
export default Header;