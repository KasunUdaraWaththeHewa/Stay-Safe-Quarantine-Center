import React from 'react'
import '../css file/login.css';
import NavBar from '../components/NavBar';
import img_p from '../img/admin_p.png';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';


export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {login,error, isLoading}=useLogin()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await login(email,password)
  }

  return (
    <div>
      <NavBar/>
      <div className="loginBack">
          <div className="loginS">
              <img src={img_p} alt="signinProfile"></img>
              <form className='signin' onSubmit={handleSubmit}>
                  <h3>Sign In</h3>
                  <label>Email</label>
                  <input
                  type="email"
                  required 
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  />
                  <label>Password</label>
                  <input
                  type="password"
                  required 
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  />
                  <button type="submit" className='submitBtn' disabled={isLoading} onClick={handleSubmit}><b>Log in</b></button>
                  {error && <div className='error'>{error}</div>}
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
