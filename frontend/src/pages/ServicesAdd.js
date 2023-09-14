import '../css file/Equipment.css';
import NavBar from "../components/NavBar";
import PackageForm from "../components/Forms/ServicesForm";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ServiceAdd() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get('http://localhost:8070/service', config);
        setServices(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchServices();
  }, []);

  console.log(user);
  const navigate = useNavigate();
  if (!user || user.role !== 'admin') {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="EquipmentDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Service Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorEquipment">
          <div className="packageForm">
            <PackageForm />
          </div>
          <div className="existingEquipment">
            <div className='scrollablePanel'>
              <ul>
                {services.map((services) => (
                  <div key={services.serviceID} className="existingEquipmentCard">
                    <p>{services.serviceName}</p>
                    <p>{services.serviceID}</p>
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
} export default ServiceAdd;