import React, { useState, useEffect } from 'react';
import '../css file/Payment.css';
import NavBar from "../components/NavBar";
import PaymentForm from "../components/PaymentForm";
import Footer from '../components/Footer';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useHistory } from 'react-router-dom';

function Payment() {
  const [payments, setpayments] = useState([]);

  const { user } = useAuthContext();
  const history = useHistory();
  
    const isAdmin = user && user.role === 'admin';

    if (!isAdmin) {
        history.push('/unauthorized');
        return null;
    }

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