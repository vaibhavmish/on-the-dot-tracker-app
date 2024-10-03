import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom';

const Header = ()=> {
	return(
       <div className="header-div">
       <ul className="nav">
         <li><Link to ="/">Home</Link></li>
         <li><Link to ="/Dashboard">Dashboard</Link></li>
         <li><Link to ="/users">Users</Link></li>
         <li>Sign in?</li>
        </ul>  
       </div>

	);
};
export default Header;