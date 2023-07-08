import React from "react";
import '../css file/Staff.css';
import NavBar from "../components/NavBar";
import StaffForm from "../components/StaffForm";
import Footer from '../components/Footer';
function Staff(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="StaffDetailArea">
                <div className="h2Holder"><h2><b>Staff Details Collecting Form</b></h2></div>
                <div className="formOneContainor"><StaffForm/></div>
                <div className="footerContainor">
                    <Footer/>
                </div>
            </div>
        </div>
    );
    
}
export default Staff;