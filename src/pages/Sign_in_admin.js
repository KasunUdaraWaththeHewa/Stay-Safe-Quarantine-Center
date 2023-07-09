import React from 'react'
import '../css file/Sign_in_admin.css';
import NavBar from '../components/NavBar';
import img_p from '../img/nurse_p.png';
import Footer from '../components/Footer';

export default function Sign_in_admin() {
  return (
    <div>
      <NavBar/>
      
      <div className="admin_back">
          <div className="admin_S">
              <img src={img_p} alt="admin profile"></img>
              <form>
                  <label>User name</label><br></br>
                  <input type="text" name="username" required></input> <br></br>
                  <label>Password</label><br></br>
                  <input type="password" name="password" required></input><br></br>
                  <input type="submit" value="Sign in"></input>
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
