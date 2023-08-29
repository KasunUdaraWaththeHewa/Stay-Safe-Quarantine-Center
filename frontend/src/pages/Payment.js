import React, { useState, useEffect, useContext} from 'react';
import '../css file/Payment.css';
import NavBar from "../components/NavBar";
import PaymentForm from "../components/PaymentForm";
import Footer from '../components/Footer';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

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

  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="PaymentDetailsArea">
        <div className="h2Holder">
          <h2>
            <b>Payment Details Form</b>
          </h2>
        </div>
        <div className="formOneContainorPayment">
          <div className="PaymentForm">
            <PaymentForm />
          </div>
          <div className="existingPayment">
            <div className='scrollablePanel'>
              <ul>
                {payments.map((payment) => (
                  <div key={payment.receiptNumber} className="existingPaymentCard">
                  <p>{payment.payerInName}</p>
                  <p>{payment.dateofpayment}</p>
                  <p>{payment.receiptNumber}</p>
                  </div>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="footerContainorPayment">
        <Footer />
      </div>
    </div>
  );
}export default Payment;