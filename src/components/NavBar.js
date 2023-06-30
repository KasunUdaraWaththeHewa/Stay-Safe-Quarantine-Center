import React from 'react'
import logo from './media/logo.png';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <div className="div-nav-bar">
            <div className="navBarLeft">
                <img className="img-logo" src={logo} alt="site logo" />
                <div id="homeImgContainer" ><img className="homeIcon" src="https://vectorified.com/images/home-icon-white-2.png" alt="" /></div>
            </div>
            <div className="navBarRight">
                <div className="navBarItem"><b><Link to="/adminpanel"> Our Center</Link></b></div>
                <div className="navBarItem"><b><Link to="/staffpanel">Packages</Link></b></div>
                <div className="navBarItem"><b><Link to="/contactus">Contact Us</Link></b></div>
                <div className="navBarItem"><b><Link to="/doctor">Sign-In</Link></b></div>
            </div>
        </div>
    );
}
export default NavBar;