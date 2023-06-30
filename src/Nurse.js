import React from "react";
import './Nurse.css';
import NavBar from "./components/NavBar";
import NurseForm from "./components/NurseForm";

function Nurse(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="NurseDetailArea">
                <div className="h2Holder"><h2><b>Nurse Details Collecting Form</b></h2></div>
                <div className="formOneContainor"><NurseForm/></div>
                <div className="smallFooter">
                    <span>
                        Developed by <a href="https://www.mugglecoders.com">MuggleCoders.Com</a>
                    </span>
                </div>
            </div>
        </div>
    );
    
}
export default Nurse;