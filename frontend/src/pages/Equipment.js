import '../css file/Equipment.css';
import NavBar from "../components/NavBar";
import EquipmentForm from "../components/EquipmentForm";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Equipment() {
  const [equipments, setequipments] = useState([]);
  
  useEffect(() => {
    async function fetchequipments() {
      try {
        const response = await axios.get('http://localhost:8070/equipment/');
        setequipments(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchequipments();
  }, []);

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="EquipmentDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Equipment Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorEquipment">
          <div className="equipmentForm">
            <EquipmentForm />
          </div>
          <div className="existingEquipment">
            <div className='scrollablePanel'>
              <ul>
                {equipments.map((equipment) => (
                  <div key={equipment.serialNumber} className="existingEquipmentCard">
                  <p>{equipment.name}</p>
                  <p>{equipment.serialNumber}</p>
                  </div>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="footerContainorEquipment">
        <Footer />
      </div>
    </div>
  );
}export default Equipment;