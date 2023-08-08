import React from "react";
import '../css file/Nurse.css';
import NavBar from "../components/NavBar";
import NurseForm from "../components/NurseForm";
import Footer from '../components/Footer';

function Nurse(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="NurseDetailArea">
                <div className="h2Holder"><h2><b>Nurse Details Collecting Form</b></h2></div>
                <div className="NurseArea">
                    <div className="formOneContainorNurse">
                        <NurseForm/>
                    </div>
                </div>
                <div className="footerContainor">
                    <Footer/>
                </div>
            </div>
        </div>
    );
    
}
export default Nurse;