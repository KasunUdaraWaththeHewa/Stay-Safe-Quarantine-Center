import React from 'react'
import '../css file/Sign_in_doctor.css';
import NavBar from '../components/NavBar'
import img_p from '../img/doctor_p.png'

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
                  <input type="submit" value="Sign in"></input>
              </form>
          </div>
      </div>
    </div>
  )
}
