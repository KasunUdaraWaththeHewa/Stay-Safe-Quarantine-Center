import React from 'react'
import img1 from '../img/doctor1.png'
import img2 from '../img/nurse1.png'
import img3 from '../img/staff1.png'
import img4 from '../img/patient1.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../css file/Sign_in_profile.css';

import {Link} from 'react-router-dom'


export default function 
Sign_in_profile() {
  return (
    <div>
      <NavBar/>
      
      <div className="profile">
        <div className="profileContainor">
            <div class="pro">
              <Link to="/Sign_in_doctor"><img src={img1} alt="profile1"></img></Link>
            </div>
            <div class="pro">
              <Link to="/Sign_in_nurse"><img src={img2} alt="profile2"></img></Link>
            </div>
            <div class="pro">
              <Link to="/Sign_in_staff"><img src={img3} alt="profile3"></img></Link>
            </div>
            <div class="pro">
              <Link to="/Sign_in_patient"><img src={img4} alt="profile4"></img></Link>
            </div>
        </div>
        
      </div>

      <Footer/>
    </div>
  )
}
