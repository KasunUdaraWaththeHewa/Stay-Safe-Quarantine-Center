import React, { useState, useEffect, useContext } from 'react';
import '../css file/PharmacyPanel.css';
import NavBar from "../components/NavBar";
import PharmacyPanelForm from "../components/PharmacyPanelForm";
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Pharmacy() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [medicines, setmedicines] = useState([]);


  useEffect(() => {
    async function fetchmedicines() {
      try {
        const response = await axios.get('http://localhost:8070/pharmacy', config);
        setmedicines(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchmedicines();
  }, []);
  console.log(user);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const navigate = useNavigate();
  if (!user || ((user.role !== 'pharmacy'))) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="MedicineDetailsArea">
        <div className="h2Holder">
          <h2>
            <b>Pharmacy Details Form</b>
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
                    <p>{medicine.med_date}</p>
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
} export default Pharmacy;