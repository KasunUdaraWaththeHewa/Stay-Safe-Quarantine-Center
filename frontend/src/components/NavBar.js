import React from 'react';
import logo from './media/logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="div-nav-bar">
      <div className="navBarLeft">
        <Link to="/" className="logo-link">
          <img className="img-logo" src={logo} alt="site logo" />
        </Link>
        <div id="homeImgContainer">
          <Link to="/" className="link">
            <img className="homeIcon" src="https://vectorified.com/images/home-icon-white-2.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="navBarRight">
        <ul className="navBarItemList">
          <li className="navBarItem">
            <Link to="/OurCenter" className="link">
              Our Center
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/packages" className="link">
              Packages
            </Link>
          </li>
          <li className="navBarItem">
            <Link to="/contactus" className="link">
              Contact Us
            </Link>
          </li>
          {!user ? (
            <div className="loginSignupContainor">
              <li className="navBarItem">
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
              <li className="navBarItem">
                <Link to="/signup" className="link">
                  Sign-Up
                </Link>
              </li>
            </div>
          ) : (
            <div className="logoutAndEmail">
              {user.email && <span className="loggedemail">{user.email}</span>}
              <li className="navBarItem" onClick={handleClick}>
                <Link to="/" className="link">
                  <b>LogOut</b>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
