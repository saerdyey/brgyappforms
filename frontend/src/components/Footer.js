import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div id="footer" className="bg-light">
            <p>&copy; {new Date().getFullYear()} Powered By: <a href="#"> Barangay Holy Spirit </a></p>
            <p>&#60;/&#62; by Jay Anton Roblico</p>
        </div>
    )
}

export default Footer;