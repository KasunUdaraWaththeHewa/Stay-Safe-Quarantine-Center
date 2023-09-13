import React, { useState, useEffect } from 'react';
import '../css file/PharmacyPanel.css';
import NavBar from "../components/NavBar";
import PharmacyPanelForm from "../components/PharmacyPanelForm";
import Footer from '../components/Footer';
import axios from 'axios';

function PharmacyPanal() {
  const [medicines, setmedicines] = useState([]);

  useEffect(() => {
    async function fetchmedicine() {
      try {
        const response = await axios.get('http://localhost:8070/medicine/');
        setmedicines(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchmedicine();
  }, []);

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="MedicineDetailsArea">
        <div className="h2Holder">
          <h2>
            <b>Medicine Details Form</b>
          </h2>
        </div>
        <div className="formOneContainorMedicine">
          <div className="medicineForm">
            <PharmacyPanelForm />
          </div>
          <div className="existingMedicine">
            <div className='scrollablePanel'>
              <ul>
                {medicines.map((medicine) => (
                  <div key={medicine.medicine_id} className="existingMedicineCard">
                  <p>{medicine.medicine_name}</p>
                  <p>{medicine.date}</p>
                  <p>{medicine.medicine_id}</p>
                  </div>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="footerContainormedicine">
        <Footer />
      </div>
    </div>
  );
}export default PharmacyPanal;