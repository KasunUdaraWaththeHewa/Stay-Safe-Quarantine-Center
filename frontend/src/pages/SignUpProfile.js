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
  const [role,setRole]=useState('')
  const {signup,error,isLoading}=useSignup()
      
  const handleSubmit = async(e)=>{
    console.log("submit done");
    e.preventDefault()
    await signup(email,password,role);
  }

  return (
    <div>
      <NavBar/>
      <div className="signupBack">
          <div className="signupS">
              <img src={img_p} alt="signupProfile"></img>
              <form className='signup' onSubmit={handleSubmit}>
                  <h3>Sign Up</h3>
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
                  <label>Role</label>
                  <div className='roleDiv'>
                      <input
                        type="radio"
                        required
                        onChange={(e) => setRole(e.target.value)}
                        value="staff"
                        checked={role === "staff"}
                      />
                      <span>Staff</span>

                      <input
                        type="radio"
                        required
                        onChange={(e) => setRole(e.target.value)}
                        value="admin"
                        checked={role === "admin"}
                      />
                      <span>Admin</span>

                      <input
                        type="radio"
                        required
                        onChange={(e) => setRole(e.target.value)}
                        value="kitchen"
                        checked={role === "kitchen"}
                      />
                      <span>Kitchen</span>

                      <input
                        type="radio"
                        required
                        onChange={(e) => setRole(e.target.value)}
                        value="Pharmacy"
                        checked={role === "Pharmacy"}
                      />
                      <span>Pharmacy</span>
                  </div>
                  <button type="submit" className='submitBtn' disabled={isLoading} onClick={handleSubmit}><b>Sign Up</b></button>
                  {error && <div className='error'>{error}</div>}
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
