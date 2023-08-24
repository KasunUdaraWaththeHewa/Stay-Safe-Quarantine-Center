import React from 'react'
import img1 from '../img/doctor1.png'
import img2 from '../img/nurse1.png'
import img3 from '../img/staff1.png'
import img4 from '../img/patient1.png'
import img5 from '../img/admin1.png'
import img6 from '../img/img_pharmacy.jpg'
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
            <div class="proDoctor">
              <Link to="/Sign_in_doctor"><img src={img1} alt="profile1"></img></Link>
            </div>
            <div class="proNurse">
              <Link to="/Sign_in_nurse"><img src={img2} alt="profile2"></img></Link>
            </div>
            <div class="proStaff">
              <Link to="/Sign_in_staff"><img src={img3} alt="profile3"></img></Link>
            </div>
            <div class="proPatient">
              <Link to="/Sign_in_patient"><img src={img4} alt="profile4"></img></Link>
            </div>
            <div class="proAdmin">
              <Link to="/Sign_in_admin"><img src={img5} alt="profile5"></img></Link>
            </div>
            <div class="proPharmacy">
              <Link to="/Sign_in_pharmacy"><img src={img3} alt="profile5"></img></Link>
            </div>
        </div>
        
      </div>

      <Footer/>
    </div>
  )
}
