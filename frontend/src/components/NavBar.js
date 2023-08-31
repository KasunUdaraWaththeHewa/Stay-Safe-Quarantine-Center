import React from 'react'
import logo from './media/logo.png';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import Form from 'react-bootstrap/Form';


function NavBar(){
    const {logout} = useLogout();
    const {user} = useAuthContext();

    const handleClick = () => {
        logout();
    } 
    return(
        <div className="div-nav-bar">
            <div className="navBarLeft">
                <img className="img-logo" src={logo} alt="site logo" />
                <div id="homeImgContainer" ><Link to="/" className="link"><img className="homeIcon" src="https://vectorified.com/images/home-icon-white-2.png" alt="" /></Link></div>
            </div>
            <div className="navBarRight">
                    <div className='navBarItemList'>
                        <div className="navBarItem"><b><Link to="/OurCenter" className="link">Our Center</Link></b></div>
                        <div className="navBarItem"><b><Link to="/packages" className="link">Packages</Link></b></div>
                        <div className="navBarItem"><b><Link to="/contactus" className="link">Contact Us</Link></b></div>    
                        {!user &&(
                            <div className='loginSignupContainor'>
                                <div className="navBarItem"><b><Link to="/login" className="link">Login</Link></b></div>
                                <div className="navBarItem"><b><Link to="/signup" className="link">Sign-Up</Link></b></div>
                            </div> 
                        )}    
                            
                        
                        {user &&(
                            <div className='logoutAndEmail' >
                                <span className='loggedemail'>{user.email}</span>
                                <div className="navBarItem" onClick={handleClick}><b>Log-Out</b></div>   
                            </div>
                        )}
                    </div>           
                
                    
            </div>

        </div>
    );
}
export default NavBar;