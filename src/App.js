import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

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
            <switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/contactus">
                  <ContactUs/>
              </Route>
              <Route exact path="/adminpanel">
                  <AdminPanel/>
              </Route>
              <Route exact path="/staffpanel">
                  <StaffPanel/>
              </Route>
              <Route exact path="/doctor">
                  <Doctor/>
              </Route>
              <Route exact path="/staff">
                  <Staff/>
              </Route>
              <Route exact path="/nurse">
                  <Nurse/>
              </Route>
            </switch>
      </Router>
      
    </div>
  );
}

export default App;
