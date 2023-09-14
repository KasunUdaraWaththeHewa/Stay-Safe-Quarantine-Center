import NavBar from '../../components/NavBar';
import '../css file/AdminPanel.css'
import Footer from '../../components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from 'react-router-dom';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function StaffPanel(){
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    if (!user || user.role !== 'admin') {
        navigate('/login');
        return null;
      }
    
    return(
        <div>
            <NavBar />
            <div>
                <div className='divAdminPanel'>
                    <div className='divAdminPanelLeft'>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <Link to="/meal" className="link"><img src="https://cdn-icons-png.flaticon.com/512/204/204245.png" alt="" /></Link>
                                <figcaption><b>Kitchen Staff</b></figcaption>
                            </div> 
                        </div>
                    </div>
                    <div className='divAdminPanelRight'>
                        <div className="PanelRightPart">
                                
                                <h3>Kitchen Staff Instructions</h3>
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