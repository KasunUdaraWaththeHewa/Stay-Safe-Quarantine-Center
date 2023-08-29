import NavBar from '../components/NavBar';
import '../css file/AdminPanel.css'
import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import React, { useState, useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function StaffPanel(){
    const { user } = useContext(AuthContext);
  if (!user || !((user.role === 'staff'))) {
    return <Redirect to="/unauthorized" />;
  }    
    return(
        <div>
            <NavBar />
            <div>
                <div className='divAdminPanel'>
                    <div className='divAdminPanelLeft'>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <Link to="/nurse" className="link"><img src="https://cdn-icons-png.flaticon.com/512/204/204245.png" alt="" /></Link>
                                <figcaption><b>Nurse</b></figcaption>
                            </div>
                            <div className="panelItem">
                            <Link to="/patient" className="link"><img src="https://cdn4.iconfinder.com/data/icons/ordinary-people/512/patient-512.png" alt="" /></Link>
                                <figcaption><b>Patient</b></figcaption>
                            </div>
                            <div className="panelItem">
                                <Link to="/doctor" className="link"><img src="https://cdn-icons-png.flaticon.com/512/194/194915.png" alt="" /></Link>
                                <figcaption><b>Doctor</b></figcaption>
                            </div>
                            <div className="panelItem">
                                <Link to="/staff" className="link"><img src="https://cdn3.iconfinder.com/data/icons/team-management/136/8-512.png" alt="" /></Link>
                                <figcaption><b>Staff</b></figcaption>
                            </div>    
                            <div className="panelItem">
                                <Link to="/payment" className="link"><img src="https://cdn-icons-png.flaticon.com/512/1102/1102760.png" alt="" /></Link>
                                <figcaption><b>Payment</b></figcaption>
                            </div>   
                        </div>
                    </div>
                    <div className='divAdminPanelRight'>
                        <div className="PanelRightPart">
                                
                                <h3>Staff Instructions</h3>
                                <div className='divAccordianContainor'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What you do will be tracked</Accordion.Header>
                                            <Accordion.Body>
                                            Please note that your actions within the system will be tracked for accountability and quality assurance purposes.Thank you for your cooperation.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Ensure Security of the Data</Accordion.Header>
                                            <Accordion.Body>
                                            Protecting the privacy of patient, doctor, staff, and nurse details is our top priority. Your confidentiality is of utmost importance to us.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Keep user information up to date to ensure accuracy</Accordion.Header>
                                            <Accordion.Body>
                                            Regularly updating user details such as contact information, roles, and permissions helps ensure that the admin panel reflects the most current and accurate information about each user.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
}
export default StaffPanel;