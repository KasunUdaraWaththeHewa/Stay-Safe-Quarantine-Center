import '../css file/Doctor.css';
import NavBar from "../components/NavBar";
import DoctorForm from "../components/DoctorForm";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function Doctor() {
  const { user } = useContext(AuthContext);
  console.log("User is ",user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await axios.get('http://localhost:8070/doctor',config);
        console.log(1)
        setDoctors(response.data);
      } catch (error) {
        console.log(2)
        console.error(error);
      }
    }

    fetchDoctors();
  }, []);
  const navigate = useNavigate();
  if (!user || !((user.role === 'admin') || (user.role === 'staff'))) {
    navigate('/login')
    return null;
  }

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
                  <li key={doctor.doctorID} className="existingDoctorCard">
                    <p><b>{doctor.firstName} {doctor.lastName}</b></p>
                    <p><b>{doctor.doctorID}</b></p>
                  </li>
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
} export default Doctor;