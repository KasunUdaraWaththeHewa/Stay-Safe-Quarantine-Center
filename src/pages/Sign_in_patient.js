import React from 'react'
import '../css file/Sign_in_patient.css';
import NavBar from '../components/NavBar'
import img_p from '../img/patien_p.png'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

export default function Sign_in_patient() {
  return (
    <div>
      <NavBar/>
      
      <div className="p_s_back">
          <div className="patient_S">
              <img src={img_p} alt="patient profile"></img>
              <form>
                  <label>User name</label><br></br>
                  <input type="text" name="username" required></input> <br></br>
                  <label>Password</label><br></br>
                  <input type="password" name="password" required></input><br></br>
                  <div className='submitBtn'><b><Link to="/Sign_in_profile" className="link">Submit</Link></b></div>
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
