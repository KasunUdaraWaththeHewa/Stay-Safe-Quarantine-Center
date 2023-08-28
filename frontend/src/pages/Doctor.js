import React, { useState, useEffect } from 'react';
import '../css file/Doctor.css';
import NavBar from "../components/NavBar";
import DoctorForm from "../components/DoctorForm";
import Footer from '../components/Footer';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

function Doctor() {
  const [doctors, setDoctors] = useState([]);
  const { user } = useAuthContext();
  const history = useHistory();
  
    const isAdmin = user && user.role === 'admin';

    if (!isAdmin) {
        history.push('/unauthorized');
        return null;
    }

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await axios.get('http://localhost:8070/doctor/');
        setDoctors(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDoctors();
  }, []);

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="DoctorDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Doctor Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorDoctor">
          <div className="doctorForm">
            <DoctorForm />
          </div>
          <div className="existingDoctor">
            <div className='scrollablePanel'>
              <ul>
                {doctors.map((doctor) => (
                  <div key={doctor.doctorID} className="existingDoctorCard">
                  <p><b>{doctor.firstName} {doctor.lastName}</b></p>
                  <p><b>{doctor.doctorID}</b></p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContainorDoctor">
        <Footer />
      </div>
    </div>
  );
}export default Doctor;