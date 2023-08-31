import React from 'react'
import {BrowserRouter as Router,Route,Switch,Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import ContactUs from './pages/ContactUs';

import Home_page from './pages/Home_page';

import AdminPanel from './pages/AdminPanel';

import StaffPanel from './pages/StaffPanel';

import PharmacyPanal from './pages/PharmacyPanal';

import Packages from './pages/Packages';

import 'bootstrap/dist/css/bootstrap.min.css';

import Staff from './pages/Staff';
import Nurse from './pages/Nurse';
import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Equipment from './pages/Equipment';
import Payment from './pages/Payment';

import Sign_in_pharmacy from './pages/Sign_in_pharmacy';

import Sign_in_profile from './pages/Sign_in_profile'
import Sign_in_doctor from './pages/Sign_in_doctor'
import Sign_in_nurse from './pages/Sign_in_nurse'
import Sign_in_patient from './pages/Sign_in_patient'
import Sign_in_staff from './pages/Sign_in_staff'
import OurCenter from './pages/OurCenter';
import Sign_in_admin from './pages/Sign_in_admin';
import Meals from './pages/Meals';
import Kitchen from './pages/Kitchen_staff';

import Login from './pages/loginProfile';
import Signup from './pages/SignUpProfile';

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/">
                  <Home_page/>
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
              <Route exact path="/patient">
                  <Patient/>
              </Route>
              <Route exact path="/equipment">
                  <Equipment/>
              </Route>
              <Route exact path = "/packages">
                  <Packages/>
              </Route>
              <Route exact path="/payment">
                  <Payment/>
              </Route>
              <Route exact path="/Sign_in_profile">
                  <Sign_in_profile/>
              </Route>
              <Route exact path="/Sign_in_doctor">
                <Sign_in_doctor/>
              </Route>

              <Route exact path="/Sign_in_staff">
                <Sign_in_staff/>
              </Route>

              <Route exact path="/Sign_in_nurse">
                <Sign_in_nurse/>
              </Route>

              <Route exact path="/Sign_in_patient">
                <Sign_in_patient/>
              </Route>

              <Route exact path="/OurCenter">
                <OurCenter/>
              </Route>
              <Route exact path="/sign_in_admin">
                <Sign_in_admin/>
              </Route>

              <Route exact path="/Sign_in_pharmacy">
                <Sign_in_pharmacy/>
              </Route>
              <Route exact path="/PharmacyPanal">
                <PharmacyPanal/>
              </Route>
              <Route exact path="/signup">
                <Signup/>
              </Route>

              <Route exact path="/login">
                <Login/>
              </Route>
              
              <Route exact path="/meals">
                <Meals/>
              </Route>

              <Route exact path="/kitchen">
                <Kitchen/>
              </Route>

            </Switch>
      </Router>
      
    </div>
  );
}

export default App;
