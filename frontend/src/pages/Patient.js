import '../css file/Patient.css';
import NavBar from "../components/NavBar";
import PatientForm from "../components/PatientForm";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Patient() {
    const [patients, setPatient] = useState([]);
  
    useEffect(() => {
      async function fetchPatients() {
        try {
          const response = await axios.get('http://localhost:8070/patient/');
          setPatient(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchPatients();
    }, []);
  
    return (
      <div>
        <div className="navBarContainor">
          <NavBar />
        </div>
        <div className="PatientDetailArea">
          <div className="h2Holder">
            <h2>
              <b>Patient Details Collecting Form</b>
            </h2>
          </div>
          <div className="formOneContainorPatient">
            <div className="patientForm">
              <PatientForm />
            </div>
            <div className="existingPatients">
              <div className='scrollablePanel'>
                <ul>
                  {patients.map((patient) => (
                    <div key={patient.nicNumber} className="existingPatientCard">
                    <p>{patient.fullName}</p>
                    <p>{patient.nicNumber}</p>
                    </div>
                  ))}
                </ul>
              </div>  
            </div>
          </div>
        </div>
        <div className="footerContainorPatient">
          <Footer />
        </div>
      </div>
    );    
    }export default Patient;