import React from 'react';
import NavBar from './components/NavBar';
import './AdminPanel.css'

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
                                <figcaption>Staff SignUp</figcaption>
                            </div>
                            <div className="panelItem">
                                <img src="https://cdn4.iconfinder.com/data/icons/ordinary-people/512/patient-512.png" alt="" />
                                <figcaption>Patient</figcaption>
                            </div>
                        </div>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <img src="https://cdn-icons-png.flaticon.com/512/194/194915.png" alt="" />
                                <figcaption>Doctor</figcaption>

                            </div>
                            <div className="panelItem">
                                <img src="https://cdn-icons-png.flaticon.com/512/204/204245.png" alt="" />
                                <figcaption>Nurse</figcaption>
                            </div>
                        </div>
                        <div className='PanelRow'>
                            <div className="panelItem">
                                <img src="https://cdn3.iconfinder.com/data/icons/team-management/136/8-512.png" alt="" />
                                <figcaption>Staff</figcaption>
                            </div>
                            
                        </div>
                    </div>
                    <div className='divAdminPanelRight'>
                        <div className="PanelRightPart">
                            
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
export default AdminPanel;