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
  
  const { user } = useAuthContext();
  const history = useHistory();
  
    const isAdmin = user && user.role === 'admin';

    if (!isAdmin) {
        history.push('/unauthorized');
        return null;
    }
    
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
                  <button type="submit" className='submitBtn' disabled={isLoading} onClick={handleSubmit}><b>Sign Up</b></button>
                  {error && <div className='error'>{error}</div>}
              </form>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
