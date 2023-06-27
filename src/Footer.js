import React from 'react';
import './Footer.css';
import myImage from './logo.png';


function Footer(){
    return (  
        <div className="footer">
            <footer>
                <div class="row">
                    <div class="col-3">
                        <div class="link-cat" onclick="footerToggle(this)">
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">Quarantine</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>Packages</span></a></li>
                            <li><a href=""><span>Our Centre</span></a></li>
                            <li><a href=""><span>Covid-19</span></a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <div class="link-cat" onclick="footerToggle(this)">
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">Contact Us</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>Suggestions</span></a></li>
                            <li><a href=""><span>Complainings</span></a></li>
                            <li><a href=""><span>Bookings</span></a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <div class="link-cat" onclick="footerToggle(this)">
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">Sign In</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>Patients</span></a></li>
                            <li><a href=""><span>Staff</span></a></li>
                            <li><a href=""><span>Management</span></a></li>
                        </ul>
                    </div>
                    <div class="col-3"><img class="img-site-logo" src={myImage} alt="site logo"/></div>
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