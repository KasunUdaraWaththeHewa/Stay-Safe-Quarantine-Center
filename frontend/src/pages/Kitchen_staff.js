import '../css file/Kitchenstaff.css';
import NavBar from "../components/NavBar";
import KitchenStaffForm from "../components/KitchenStaffForm";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Kitchenkitchen() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const [kitchens, setkitchens] = useState([]);

  useEffect(() => {
    async function fetchkitchens() {
      try {
        const response = await axios.get('http://localhost:8070/kitchen',config);
        setkitchens(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchkitchens();
  }, []);

  console.log(user)
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
      <div className="kitchenDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Kitchen staff Details Collecting Form</b>
          </h2>
        </div>
        <div className="formOneContainorkitchen">
          <div className="kitchenForm">
            <KitchenStaffForm />
          </div>
          <div className="existingkitchen">
            <div className='scrollablePanel'>
              <ul>
                {kitchens.map((kitchen) => (
                  <div key={kitchen.nurseID} className="existingkitchenCard">
                    <p>{kitchen.firstName} {kitchen.lastName}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footerContainorkitchen">
        <Footer />
      </div>
    </div>
  );
}
export default Kitchenkitchen;