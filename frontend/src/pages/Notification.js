import '../css file/Notification.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import NotificationForm from '../components/NotificationForm';


function Notification() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const [notifications, setNotification] = useState([]);

  useEffect(() => {
    async function fetchNotification() {
      try {
        const response = await axios.get('http://localhost:8070/notification',config);
        setNotification(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNotification();
  }, []);

  console.log(user);
  const navigate = useNavigate();
    if (!user || ((user.role !== 'admin')&&(user.role !== 'staff'))) {
        navigate('/login');
        return null;
      }
  
  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="NotificationDetailArea">
        <div className="h2Holder">
          <h2>
            <b>Notification Creating Area for Members</b>
          </h2>
        </div>
        <div className="formOneContainorNotification">
          <div className="notificationForm">
            <NotificationForm />
          </div>
          <div className="existingNotification">
              <div className='scrollablePanel'>
              <ul>
                {notifications.map((notification) => (
                  <div key={notification.notificationID} className="existingNotificationCard">
                  <p>{notification.reciever}</p>
                  <p>{notification.title}</p>
                  </div>
                ))}
              </ul>
             </div>
          </div> 
        </div>
      </div>
      <div className="footerContainorNotification">
        <Footer />
      </div>
    </div>
  );
}

export default Notification;
