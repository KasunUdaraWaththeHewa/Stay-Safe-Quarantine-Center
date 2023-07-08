import React from "react";
import '../css file/Nurse.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

const Packages = () => {
    return ( 
        <div className="packages">
            <div className="navbar">
                <NavBar/>
            </div>
            <div className="text">HI</div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
     );
}
 
export default Packages;