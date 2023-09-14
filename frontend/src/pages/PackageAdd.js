import '../css file/Equipment.css';
import NavBar from "../components/NavBar";
import PackageForm from "../components/Forms/PackageForm";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PackageAdd() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const [packages, setpackages] = useState([]);

  useEffect(() => {
    async function fetchpackages() {
      try {
        const response = await axios.get('http://localhost:8070/package', config);
        setpackages(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchpackages();
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
            <b>Package Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorEquipment">
          <div className="packageForm">
            <PackageForm />
          </div>
          <div className="existingEquipment">
            <div className='scrollablePanel'>
              <ul>
                {packages.map((packages) => (
                  <div key={packages.packageID} className="existingEquipmentCard">
                    <p>{packages.packageName}</p>
                    <p>{packages.packageID}</p>
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
} export default PackageAdd;