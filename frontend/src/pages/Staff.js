import React, { useState, useEffect } from 'react';
import '../css file/Staff.css';
import NavBar from "../components/NavBar";
import StaffForm from "../components/StaffForm";
import Footer from '../components/Footer';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

function Staff() {
    const [staffs, setStaffs] = useState([]);
  
    const { user } = useAuthContext();
    const history = useHistory();
  
    const isAdmin = user && user.role === 'admin';

    if (!isAdmin) {
        history.push('/unauthorized');
        return null;
    }

    useEffect(() => {
      async function fetchStaffs() {
        try {
          const response = await axios.get('http://localhost:8070/staff/');
          setStaffs(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchStaffs();
    }, []);
  
    return (
      <div>
        <div className="navBarContainor">
          <NavBar />
        </div>
        <div className="StaffDetailArea">
          <div className="h2Holder">
            <h2>
              <b>Staff Details Collecting Form</b>
            </h2>
          </div>
          <div className="formOneContainorStaff">
            <div className="staffForm">
              <StaffForm />
            </div>
            <div className="existingStaff">
              <div className='scrollablePanel'>
                <ul>
                  {staffs.map((staff) => (
                    <div key={staff.nurseID} className="existingStaffCard">
                    <p>{staff.firstName} {staff.lastName}</p>
                    <p>{staff.staffID}</p>
                    </div>
                  ))}
                </ul>
              </div>  
            </div>
          </div>
        </div>
        <div className="footerContainorStaff">
          <Footer />
        </div>
      </div>
    );
  }
export default Staff;