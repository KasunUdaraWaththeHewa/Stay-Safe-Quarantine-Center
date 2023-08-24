import React from "react";
import '../css file/Doctor.css';
import NavBar from "../components/NavBar";
import DoctorForm from "../components/DoctorForm";
import Footer from '../components/Footer';

function Doctor(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="DoctorDetailArea">
                <div className="h2Holder"><h2><b>Doctor Details Collecting Form</b></h2></div>
                <div className="formOneContainorDoctor">
                    <div className="doctorForm">
                        <DoctorForm/>
                    </div>
                    <div className="existingDoctors">

                    </div>
                </div>
            </div>
            <div className="footerContainor">
                    <Footer/>
            </div>
        </div>
    );
    
}
export default Doctor;