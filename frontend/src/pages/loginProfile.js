import React from 'react'
import '../css file/login.css';
import NavBar from '../components/NavBar';
import img_p from '../img/admin_p.png';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(email,password)
  }

  return (
    <div>
      <NavBar/>
      
      <div className="loginBack">
          <div className="loginS">
              <img src={img_p} alt="signinProfile"></img>
              <form className='signin' onSubmit={handleSubmit}>
                  <label>Email</label><br></br>
                  <input type="email" name="email" required onChange={(e)=>setEmail(e.target.value)} value={email}></input> <br></br>
                  <label>Password</label><br></br>
                  <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)} value={password}></input><br></br>
                  <div className='submitBtn'><b><Link to="/adminPanel" className="link">Log in</Link></b></div>
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
