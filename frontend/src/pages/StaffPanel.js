import NavBar from '../components/NavBar';
import '../css file/StaffPanel.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function StaffPanel() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([]);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
    useEffect(() => {
        async function fetchNotification() {
            try {
                const response = await axios.get('http://localhost:8070/notification', config);
                // Filter notifications based on the recipient being staff
                const filteredNotifications = response.data.filter(notification => notification.reciever === 'staff');
                setNotifications(filteredNotifications);
                console.log(filteredNotifications);
            } catch (error) {
                console.error(error);
            }
        }

        // Fetch notifications when the component mounts
        fetchNotification();
    }, []);

    if (!user || !((user.role === 'admin') || (user.role === 'staff'))) {
        navigate('/login')
        return null;
    }


    return (
        <div>
            <NavBar />
            <div>
                <div className='divAdminPanel'>
                    <div className='divAdminPanelLeft' id='divStaffPanelleft'>
                        <div className='PanelRow'>
                            <div className='panelItem' id='staffPanelNurse'>
                                <Link to='/nurse' className='link'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/204/204245.png' alt='' />
                                </Link>
                                <figcaption>
                                    <b>Nurse</b>
                                </figcaption>
                            </div>
                            <div className='panelItem'>
                                <Link to='/patient' className='link'>
                                    <img src='https://cdn4.iconfinder.com/data/icons/ordinary-people/512/patient-512.png' alt='' />
                                </Link>
                                <figcaption>
                                    <b>Patient</b>
                                </figcaption>
                            </div>
                            <div className='panelItem'>
                                <Link to='/doctor' className='link'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/194/194915.png' alt='' />
                                </Link>
                                <figcaption>
                                    <b>Doctor</b>
                                </figcaption>
                            </div>
                            <div className='panelItem'>
                                <Link to='/payment' className='link'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/1102/1102760.png' alt='' />
                                </Link>
                                <figcaption>
                                    <b>Payment</b>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                    <div className='divAdminPanelRight'>
                        <div className='divStaffPanelRightPart'>
                            <h3>Staff Instructions</h3>
                            <div className='divNotificationContainor'>
                                <ul>
                                    {notifications.map((notification) => (
                                        <div key={notification.notificationID} className="existingNotificationCard">
                                            <p>{notification.title}</p>
                                            <p>{notification.notificationBody}</p>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default StaffPanel;
