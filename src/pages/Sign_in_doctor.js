import React from 'react'
import '../css file/Sign_in_doctor.css';
import NavBar from '../components/NavBar'
import img_p from '../img/doctor_p.png'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';

export default function Sign_in_doctor() {
  return (
    <div>
      <NavBar/>

      <div className="d_s_back">
          <div className="doctor_S">
              <img src={img_p} alt="doctor profile"></img>
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
