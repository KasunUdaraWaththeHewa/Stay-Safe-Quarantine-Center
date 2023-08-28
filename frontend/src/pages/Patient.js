import React, { useState, useEffect } from 'react';
import '../css file/Patient.css';
import NavBar from "../components/NavBar";
import PatientForm from "../components/PatientForm";
import Footer from '../components/Footer';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

function Patient() {
    const [patients, setPatient] = useState([]);

    const { user } = useAuthContext();
    const history = useHistory();
  
    const isAdmin = user && user.role === 'admin';

    if (!isAdmin) {
        history.push('/unauthorized');
        return null;
    }
  
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