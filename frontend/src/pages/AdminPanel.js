import React from 'react';
import NavBar from '../components/NavBar';
import '../css file/AdminPanel.css'
import Footer from '../components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import Equipment from '../img/equipment.png'
import Package from '../img/packages.png'
import Service from '../img/services.png'

function AdminPanel(){
        return(
        <div>
            <NavBar />
            <div>
                <div className='divAdminPanel'>
                    <div className='divAdminPanelLeft'>
                        <div className='PanelRow' id='row1'>
                            <div className="panelItem" id='stafficon'>
                                <Link to="/staff" className="link"><img src="https://cdn3.iconfinder.com/data/icons/team-management/136/8-512.png" alt="" /></Link>
                                <figcaption><b>Staff</b></figcaption>
                            </div> 
                            <div className="panelItem">
                                <Link to="/doctor" className="link"><img src="https://cdn-icons-png.flaticon.com/512/194/194915.png" alt="" /></Link>
                                <figcaption><b>Doctor</b></figcaption>

                            </div>
                            <div className="panelItem">
                                <Link to="/nurse" className="link"><img src="https://cdn-icons-png.flaticon.com/512/204/204245.png" alt="" /></Link>
                                <figcaption><b>Nurse</b></figcaption>
                            </div>
                            <div className="panelItem">
                                <Link to="/patient" className="link"><img src="https://cdn4.iconfinder.com/data/icons/ordinary-people/512/patient-512.png" alt="" /></Link>
                                <figcaption><b>Patient</b></figcaption>
                            </div>
                            
                        </div>
                        <div className='PanelRow'>
                            <div className="panelItem" id='equipicon'>
                                <Link to="/equipment" className="link"><img src = {Equipment} alt="" /></Link>
                                <figcaption id='figequip'><b>Equipment</b></figcaption>
                            </div>    
                            <div className="panelItem">
                                <Link to="/packages" className="link"><img src = {Package} alt="" /></Link>
                                <figcaption id='figpackage'><b>Packages</b></figcaption>
                            </div>  
                            <div className="panelItem">
                                <Link to="/patient" className="link"><img src = {Service} alt="" /></Link>
                                <figcaption id='figservice'><b>Services</b></figcaption>
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
                                            For enhanced security, it is advisable for the admin to handle the creation of staff accounts personally. 
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Ensure each user has a unique password for the account</Accordion.Header>
                                            <Accordion.Body>
                                            Unique passwords help prevent unauthorized access and protect sensitive information associated with user accounts.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
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
            <div className="smallFooterHomeAdminStaffPanels">
                <Footer/>
            </div>

        </div>
    );
}
export default AdminPanel;