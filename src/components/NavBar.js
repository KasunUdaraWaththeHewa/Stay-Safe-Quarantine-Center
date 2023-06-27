import React from 'react'
import logo from './media/logo.png';

function NavBar(){
    return(
        <div className="div-nav-bar">
            <div className="navBarLeft">
                <img className="img-logo" src={logo} alt="site logo" />
                <div id="homeImgContainer" ><img className="homeIcon" src="https://vectorified.com/images/home-icon-white-2.png" alt="" /></div>
            </div>
            <div className="navBarRight">
                <div className="navBarItem"><b>Our Center</b></div>
                <div className="navBarItem"><b>Packages</b></div>
                <div className="navBarItem"><b>Contact Us</b></div>
                <div className="navBarItem"><b>Sign-In</b></div>
            </div>
        </div>
    );
}
export default NavBar;