import React from 'react';
import NavBar from './components/NavBar';
import './AdminPanel.css'

import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';

function AdminPanel(){
    return(
        <div>
            <NavBar />
            <div>
                <div className='divAdminPanel'>
                    <div className='divAdminPanelLeft'>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/19-1024.png" alt="" />
                                <figcaption><b>Staff SignUp</b></figcaption>
                            </div>
                            <div className="panelItem">
                                <img src="https://cdn4.iconfinder.com/data/icons/ordinary-people/512/patient-512.png" alt="" />
                                <figcaption><b>Patient</b></figcaption>
                            </div>
                            
                        </div>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <img src="https://cdn-icons-png.flaticon.com/512/194/194915.png" alt="" />
                                <figcaption><b>Doctor</b></figcaption>

                            </div>
                            <div className="panelItem">
                                <img src="https://cdn-icons-png.flaticon.com/512/204/204245.png" alt="" />
                                <figcaption><b>Nurse</b></figcaption>
                            </div>
                        </div>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/8-512.png" alt="" />
                                <figcaption><b>Staff</b></figcaption>
                            </div>                           
                        </div>
                    </div>
                    <div className='divAdminPanelRight'>
                        <div className="PanelRightPart">                               
                                <h3>Admin Instructions</h3>
                                <div className='divAccordianContainor'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Create Staff Accounts by yourself</Accordion.Header>
                                            <Accordion.Body>
                                            For enhanced security, it is advisable for the admin to handle the creation of staff accounts personally. This allows for the implementation of stringent security measures, accurate assignment of roles and permissions, and verification of user identities. By maintaining control over staff account creation, the admin can effectively mitigate the risk of unauthorized access and protect the confidentiality of sensitive information.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Ensure Security of the Data</Accordion.Header>
                                            <Accordion.Body>
                                            Protecting the privacy of patient, doctor, staff, and nurse details is our top priority. Stringent security measures are in place to prevent any unauthorized access or leakage of sensitive data. Rest assured that all information is securely stored, encrypted, and accessible only to authorized personnel. Your confidentiality is of utmost importance to us.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="smallFooterHomeAdminStaffPanels">
                <span>
                       Developed by <a href="https://www.mugglecoders.com">MuggleCoders.Com</a>
                </span>
            </div>

        </div>
    );
}
export default AdminPanel;