import React from 'react'
import '../css file/Sign_in_patient.css';
import NavBar from '../components/NavBar'
import img_p from '../img/patien_p.png'

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
                  <input type="submit" value="Sign in"></input>
              </form>
          </div>
      </div>
    </div>
  )
}
