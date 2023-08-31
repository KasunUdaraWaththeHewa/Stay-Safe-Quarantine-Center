import React from 'react'
import '../css file/signup.css';
import NavBar from '../components/NavBar';
import img_p from '../img/admin_p.png';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useChangePassword } from '../hooks/useChangePassword';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ChnagePassword() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { changepassword, error, isLoading } = useChangePassword();

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    await changepassword({ email, role,currentPassword, newPassword, confirmNewPassword });
  }

  return (
    <div>
      <NavBar />
      <div className="signupBack">
        <div className="signupS">
          <img src={img_p} alt="signupProfile" />
          <form className='signup' onSubmit={handlePasswordChange}>
            <h3>Change Password</h3>
            <label>Email</label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Role</label>
            <input
              type="text"
              required
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            <label>Current Password</label>
            <input
              type="password"
              required
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword}
            />
            <label>New Password</label>
            <input
              type="password"
              required
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
            <label>Confirm New Password</label>
            <input
              type="password"
              required
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              value={confirmNewPassword}
            />
            <button type="submit" onClick={handlePasswordChange} className='submitBtn' disabled={isLoading}><b>Change Password</b></button>
            {error && <div className='error'>{error}</div>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
 }  
