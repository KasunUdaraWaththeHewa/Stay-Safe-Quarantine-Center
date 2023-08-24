import React from "react";
import '../css file/Doctor.css';
import NavBar from "../components/NavBar";
import EquipmentForm from "../components/EquipmentForm";
import Footer from '../components/Footer';

function Equipment(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="EquipmentDetailArea">
                <div className="h2Holder"><h2><b>Equipment Details Collecting Form</b></h2></div>
                <div className="formOneContainorDoctor"><EquipmentForm/></div>
                <div className="footerContainor">
                    <Footer/>
                </div>
            </div>
        </div>
    );
    
}
export default Equipment;