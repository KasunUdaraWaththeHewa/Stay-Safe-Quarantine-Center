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
                <div className="formOneContainorNurse">
                    <div className="nurseForm">
                        <NurseForm/>
                    </div>
                    <div className="existingNurse">

                    </div>
                </div>
            </div>
            <div className="footerContainorNurse">
                    <Footer/>
            </div>
        </div>
    );
    
}
export default Nurse;