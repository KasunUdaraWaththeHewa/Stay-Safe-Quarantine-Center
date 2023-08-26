import React, { useState, useEffect } from 'react';
import '../css file/Payment.css';
import NavBar from "../components/NavBar";
import PaymentForm from "../components/PaymentForm";
import Footer from '../components/Footer';
import axios from 'axios';

function Payment() {
    const [payments, setpayments] = useState([]);
  
    useEffect(() => {
      async function fetchpayments() {
        try {
          const response = await axios.get('http://localhost:8070/payment/');
          setpayments(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchpayments();
    }, []);

    return(
        <div className="bgpaymentform">
            <div className="navBarContainor" ><NavBar /></div>
            <div className="PaymentDetailsArea">
                <div className="h2Holder"><h2><b>Payment Details</b></h2></div>
                <div className="formOneContainorPayment"><PaymentForm/></div>
                <div className="existingPayment">
               <div className='scrollablePanel'>
              <ul>
                {payments.map((payment) => (
                  <div key={payment.receiptNumber} className="existingPaymentCard">
                  <p>{payment.payerInName}</p>
                  <p>{payment.receiptNumber}</p>
                  <p>{payment.dateofpayment}</p>
                  </div>
                ))}
              </ul>
            </div>

          </div>
                <div className="paymentfooterContainor">
                    <Footer/>
                </div>
            </div>
        </div>
    );

}

export default Payment;