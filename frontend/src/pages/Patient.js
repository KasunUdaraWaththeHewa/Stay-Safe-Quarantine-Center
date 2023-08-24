import React from "react";
import '../css file/Patient.css';
import NavBar from "../components/NavBar";
import PatientForm from "../components/PatientForm";
import Footer from '../components/Footer';

function Patient(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="PatientDetailArea">
                <div className="h2Holder"><h2><b>Patient Details Collecting Form</b></h2></div>
                <div className="formOneContainorPatient">
                    <div className="patientForm">
                        <PatientForm/>
                    </div>
                    <div className="existingPatient">

                    </div>
                </div>
            </div>
            <div className="footerContainorPatient">
                    <Footer/>
            </div>
        </div>
    );
    
}
export default Patient;