import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = ()=> {
	return(
       <footer className="footer">
       <div className="footer-container">
       <div className="footer-about">
          <h2>On the Dot Tracker</h2>
          <p>Your reliable companion to track tasks efficiently and stay on schedule!</p>
        </div>
       <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@onthedot.com</p>
          <p>Phone: +123 456 7890</p>
        </div>

      </div>  
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} On the Dot Tracker. All Rights Reserved.</p>
      </div>   
       </footer>

	);
};
export default Footer;



// 
//          <h3>Quick Links</h3>
//            <ul>
//              <li><Link to ="/">Home</Link></li>
//              <li><Link to ="/Dashboard">Dashboard</Link></li>
//              <li><Link to ="/users">Users</Link></li>
//              <li>Sign in?</li>
//         </ul>
//        </div>