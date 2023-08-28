import React from 'react'
import '../css file/signup.css';
import NavBar from '../components/NavBar';
import img_p from '../img/admin_p.png';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';


export default function Signup() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {signup,error,isLoading}=useSignup()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    await signup(email,password);
  }

  return (
    <div>
      <NavBar/>
      
      <div className="signupBack">
          <div className="signupS">
              <img src={img_p} alt="signupProfile"></img>
              <form className='signup' onSubmit={handleSubmit}>
                  <label>Email</label><br></br>
                  <input type="email" name="email" required onChange={(e)=>setEmail(e.target.value)} value={email}></input> <br></br>
                  <label>Password</label><br></br>
                  <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)} value={password}></input><br></br>
                  {/* <input type="submit" className='submitBtn' disabled={isLoading}><b>  Sign Up</b></input> */}
                  <button type="submit" className='submitBtn' disabled={isLoading} onClick={handleSubmit}><b>  Sign Up</b></button>
                  {error && <div className='error'>{error}</div>}
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
