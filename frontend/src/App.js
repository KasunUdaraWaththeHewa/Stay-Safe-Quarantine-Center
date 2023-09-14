import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactUs from './pages/ContactUs';

import Home_page from './pages/Home_page';

import AdminPanel from './pages/Panel/AdminPanel';

import StaffPanel from './pages/Panel/StaffPanel';

import Pharmacy from './pages/Pharmacy';

import Packages from './pages/Packages/Packages';

import Staff from './pages/Users/Staff';
import Nurse from './pages/Users/Nurse';
import Doctor from './pages/Users/Doctor';
import Patient from './pages/Users/Patient';
import Equipment from './pages/Equipment';
import Payment from './pages/Payment';
import OurCenter from './pages/Services/OurCenter';
import Meals from './pages/Meals';
import Login from './pages/UserAuthenticationFrontend/loginProfile';
import Signup from './pages/UserAuthenticationFrontend/SignUpProfile';
import ChangePassword from './pages/UserAuthenticationFrontend/changePassword';
import AddPackages from './pages/Packages/PackageAdd'
import AddServices from './pages/Services/ServicesAdd'
import Notification from './pages/Notification';
import PackageFetch from './pages/Packages/packageFetch';
import ServiceFetch from './pages/Services/ServiceFetch';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/staffpanel" element={<StaffPanel />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/OurCenter" element={<OurCenter />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/addPackages" element={<AddPackages />} />
          <Route path="/addServices" element={<AddServices />}/>
          <Route path="/notification" element={<Notification />} />
          <Route path="/packageFetch" element={<PackageFetch />} />
          <Route path="/serviceFetch" element={<ServiceFetch />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
