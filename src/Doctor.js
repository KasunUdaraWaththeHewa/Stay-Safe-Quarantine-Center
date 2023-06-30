import React from "react";
import './Doctor.css';
import NavBar from "./components/NavBar";
import StaffForm from "./components/DoctorForm";
import DoctorForm from "./components/DoctorForm";

function Doctor(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="DoctorDetailArea">
                <div className="h2Holder"><h2><b>Doctor Details Collecting Form</b></h2></div>
                <div className="formOneContainor"><DoctorForm/></div>
                <div className="smallFooter">
                    <span>
                        Developed by <a href="https://www.mugglecoders.com">MuggleCoders.Com</a>
                    </span>
                </div>
            </div>
        </div>
    );
    
}
export default Doctor;