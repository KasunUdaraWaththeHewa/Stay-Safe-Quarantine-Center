import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'


function Footer(){
    return (  
        <div className="footer">
            <footer>
                <div className="row">
                    <div className="col-3">
                        <div className="link-cat" onClick="footerToggle(this)">
                            <span className="footer-toggle"></span>
                            <span className="footer-cat">Quarantine</span>
                        </div>
                        <ul className="footer-cat-links">
                            <li><Link to="/packages"><span>Packages</span></Link></li>
                            <li><Link to="/OurCenter"><span>OurCenter</span></Link></li>
                            <li><a href=""><span>Covid-19</span></a></li>
                           
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="link-cat" onClick="footerToggle(this)">
                            <span className="footer-toggle"></span>
                            <span className="footer-cat">Contact Us</span>
                        </div>
                        <ul className="footer-cat-links">
                            <li><a href=""><span>Suggestions</span></a></li>
                            <li><a href=""><span>Complainings</span></a></li>
                            <li><a href=""><span>Bookings</span></a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <div className="link-cat" onClick="footerToggle(this)">
                            <span className="footer-toggle"></span>
                            <span className="footer-cat">Sign In</span>
                        </div>
                        <ul className="footer-cat-links">
                            <li><Link to="/Sign_in_profile"><span>Patients</span></Link></li>
                            <li><Link to="/Sign_in_profile"><span>Staff</span></Link></li>
                            <li><Link to="/Sign_in_profile"><span>Nurse</span></Link></li>
                           
                        </ul>
                    </div>
                </div>
                <div id="copyright">
                    &copy; All Rights Reserved 2023-2024
                </div>
                <div id="owner">
                <span>
                    Developed by <a href="https://www.mugglecoders.com">MuggleCoders.Com</a>
                </span>
                </div>
            </footer>
        </div>
    );
}
export default Footer;