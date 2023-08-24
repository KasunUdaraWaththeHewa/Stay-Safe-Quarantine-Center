import React, { useState, useEffect } from 'react';
import '../css file/Doctor.css';
import NavBar from "../components/NavBar";
import DoctorForm from "../components/DoctorForm";
import Footer from '../components/Footer';
import axios from 'axios';

function Doctor() {
  const [doctors, setDoctors] = useState([]);

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
            <ul>
              {doctors.map((doctor) => (
                <div key={doctor.doctorID} className="existingDoctorCard">
                <p>{doctor.firstName} {doctor.lastName}</p>
                <p>{doctor.doctorID}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footerContainorDoctor">
        <Footer />
      </div>
    </div>
  );
}export default Doctor;