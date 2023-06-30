import React from "react";
import './Staff.css';
import NavBar from "./components/NavBar";
import GridComplexExample from "./components/GridComplexExample";

function Staff(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
            <div className="StaffDetailArea">
                <div className="h2Holder"><h2><b>Staff Details Collecting Form</b></h2></div>
                <div className="formOneContainor"><GridComplexExample/></div>
            </div>
        </div>
    );
    
}
export default Staff;