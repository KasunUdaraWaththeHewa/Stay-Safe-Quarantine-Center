import React from "react";
import '../css file/Patient.css';
import NavBar from "../components/NavBar";
import PatientForm from "../components/PatientForm";
import Footer from '../components/Footer';

function Patient(){
    return(
        <div className="bgpatientform">
            <div className="navBarContainor" ><NavBar /></div>
            <div className="PatientDetailArea">
                <div className="h2Holder"><h2><b>Patient Details Collecting Form</b></h2></div>
                <div className="formOneContainor"><PatientForm/></div>
                <div className="footerContainor">
                    <Footer/>
                </div>
            </div>
        </div>
    );
    
}
export default Patient;