import React from 'react'
import './App.css';

import  './components/NavBar.css';
import NavBar from './components/NavBar';

import ContactUs from './ContactUs';
import './ContactUs.css';

import Footer from './components/Footer';
import './components/Footer.css';

import Home from './Home';

import AdminPanel from './AdminPanel';
import './AdminPanel.css';

import StaffPanel from './StaffPanel';

import 'bootstrap/dist/css/bootstrap.min.css';

import Staff from './Staff';
import './Staff.css';

import Nurse from './Nurse';
import './Nurse.css';


import Doctor from './Doctor';
import './Doctor.css';

function App() {
  return (
    <div className="App">
      <Nurse />
    </div>
  );
}

export default App;
