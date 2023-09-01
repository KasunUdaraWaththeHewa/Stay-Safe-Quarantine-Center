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
import OurCenter from './pages/OurCenter';
import Meals from './pages/Meals';
import Kitchen from './pages/Kitchen_staff';
import Login from './pages/loginProfile';
import Signup from './pages/SignUpProfile';
import ChangePassword from './pages/changePassword';

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
              

              <Route exact path="/OurCenter">
                <OurCenter/>
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
              
              <Route exact path="/changePassword">
                <ChangePassword/>
              </Route>

            </Switch>
      </Router>
      
    </div>
  );
}

export default App;
