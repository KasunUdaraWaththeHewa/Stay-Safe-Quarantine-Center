import React from "react";
import '../css file/Payment.css';
import NavBar from "../components/NavBar";
import PaymentForm from "../components/PaymentForm";
import Footer from '../components/Footer';

function Payment(){
    return(
        <div className="bgpaymentform">
            <div className="navBarContainor" ><NavBar /></div>
            <div className="PaymentDetails">
                <div className="h2Holder"><h2><b>Payment Details</b></h2></div>
                <div className="paymentformContainor"><PaymentForm/></div>
                <div className="paymentfooterContainor">
                    <Footer/>
                </div>
            </div>
        </div>
    );
    
}

export default Payment;