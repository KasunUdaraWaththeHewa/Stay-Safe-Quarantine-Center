import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

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

import Nurse from './Nurse';

import Doctor from './Doctor';



function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path="/">
                  element={<Home/>}
              </Route>
              <Route exact path="/contactus">
                  element={<ContactUs/>}
              </Route>
              <Route exact path="/adminpanel">
                  element={<AdminPanel/>}
              </Route>
              <Route exact path="/staffpanel">
                  element={<StaffPanel/>}
              </Route>
              <Route exact path="/doctor">
                  element={<Doctor/>}
              </Route>
              <Route exact path="/staff">
                  element={<Staff/>}
              </Route>
              <Route exact path="/nurse">
                  element={<Nurse/>}
              </Route>
            </Routes>
      </Router>
      
    </div>
  );
}

export default App;
