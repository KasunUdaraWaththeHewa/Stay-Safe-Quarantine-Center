import React from 'react';
import NavBar from './components/NavBar';
import './AdminPanel.css'

import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from 'react-bootstrap/Accordion';

function StaffPanel(){
    return(
        <div>
            <NavBar />
            <div>
                <div className='divAdminPanel'>
                    <div className='divAdminPanelLeft'>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <img src="https://cdn-icons-png.flaticon.com/512/204/204245.png" alt="" />
                                <figcaption><b>Nurse</b></figcaption>
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
                                    <h3>Staff Panel</h3>
                                    <div className='divProgressBarContainor'>
                                    <div>
                                        <label>Patients Came</label><ProgressBar animated now={100} />
                                        <label>Patients Discharged</label><ProgressBar animated now={75} />
                                        <label>Doctor and Nurse Skills</label><ProgressBar animated now={98} />
                                    </div>
                                    </div>
                                
                                <h3>Staff Instructions</h3>
                                <div className='divAccordianContainor'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What you do will be tracked</Accordion.Header>
                                            <Accordion.Body>
                                            Please note that your actions within the system will be tracked for accountability and quality assurance purposes. This monitoring helps us maintain a secure and efficient environment for the benefit of our patients and the smooth functioning of the quarantine center. Thank you for your cooperation.
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
            <div className="smallFooter">
                <span>
                       Developed by <a href="https://www.mugglecoders.com">MuggleCoders.Com</a>
                </span>
            </div>

        </div>
    );
}
export default StaffPanel;