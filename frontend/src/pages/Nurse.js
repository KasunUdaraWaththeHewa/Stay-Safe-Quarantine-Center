import React, { useState, useEffect } from 'react';
import '../css file/Nurse.css';
import NavBar from '../components/NavBar';
import NurseForm from '../components/NurseForm';
import Footer from '../components/Footer';
import axios from 'axios';

function Nurse() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    async function fetchNurses() {
      try {
        const response = await axios.get('http://localhost:8070/nurse/');
        setNurses(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNurses();
  }, []);

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="NurseDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Nurse Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorNurse">
          <div className="nurseForm">
            <NurseForm />
          </div>
          <div className="existingNurse">
            <div className='scrollablePanel'>
              <ul>
                {nurses.map((nurse) => (
                  <div key={nurse.nurseID} className="existingNurseCard">
                  <p>{nurse.firstName} {nurse.lastName}</p>
                  <p>{nurse.nurseID}</p>
                  </div>
                ))}
              </ul>
             </div> 
          </div>
        </div>
      </div>
      <div className="footerContainorNurse">
        <Footer />
      </div>
    </div>
  );
}

export default Nurse;
