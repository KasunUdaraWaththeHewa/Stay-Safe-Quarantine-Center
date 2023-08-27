import React from 'react';
import '../css file/Sign_in_pharmacy.css';
import NavBar from '../components/NavBar';
import img_p from '../img/img_pharmacy.jpg';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

export default function Sign_in_pharmacy() {
  return (
    <div>
      <NavBar/>
      
      <div className="s_s_back">
          <div className="staff_S">
              <img src={img_p} alt="staff profile"></img>
              <form>
                  <label>User name</label><br></br>
                  <input type="text" name="username" required></input> <br></br>
                  <label>Password</label><br></br>
                  <input type="password" name="password" required></input><br></br>
                  <div className='submitBtn'><b><Link to="/PharmacyPanal" className="link">Submit</Link></b></div>
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}