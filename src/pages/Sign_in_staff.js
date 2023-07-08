import React from 'react'
import '../css file/Sign_in_staff.css';
import NavBar from '../components/NavBar'
import img_p from '../img/staff_p.jpg'

export default function Sign_in_staff() {
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
                  <input type="submit" value="Sign in"></input>
              </form>
          </div>
      </div>
    </div>
  )
}
