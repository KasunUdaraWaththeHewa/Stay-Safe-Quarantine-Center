import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

 
function PaymentForm(){
   
    const [payerInName, setPayerInName] = useState(""); 
    const [payerNIC, setPayerNIC] = useState("");
    const [patientNIC, setPatientNIC] = useState(""); 
    const [amount, setAmount] = useState("");    
    const [receiptNumber, setReceiptNumber] = useState("");
    const [dateofpayment, setDateofPayment] = useState("");
    const [time, setTime] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    
    //add payment
    function sendData(e) {
        e.preventDefault();
        const newPayment = {
            dateofpayment,
            amount,
            receiptNumber,
            payerInName,
            payerNIC,
            patientNIC,
            time,
        }
        axios.post("http://localhost:8070/payment/add", newPayment).then(() => {
            alert("Payment added");
            setPayerInName("");
            setPayerNIC("");
            setPatientNIC("");
            setAmount("");
            setReceiptNumber("");
            setDateofPayment(""); 
            setTime("");
        }).catch((err)=>{
            console.log(err);
        })
    }

  //search payment
   function populateFormWithFetchedData(){


    if (searchResult) {
      setPayerInName(searchResult.paymentObj.payerInName);
      setPayerNIC(searchResult.paymentObj.payerNIC);
      setPatientNIC(searchResult.paymentObj.patientNIC);
      setAmount(searchResult.paymentObj.amount);
      setReceiptNumber(searchResult.paymentObj.receiptNumber);
      setDateofPayment(searchResult.paymentObj.dateofpayment);
      setTime(searchResult.paymentObj.time);
     
     alert("Populated form");
     } 
    }  

    useEffect(() => {
        populateFormWithFetchedData();
    }, [searchResult]);

    function handleSearch() {
        axios.get(`http://localhost:8070/payment/get/${receiptNumber}`)

          .then((response) => {
            setSearchResult(response.data);
            if (response.data) {
              alert("Payment found");
              console.log(response.data);
              populateFormWithFetchedData()
            } else {
              alert("Payment not found");
            }
          })
          .catch((error) => {
            console.error(error);
            setSearchResult(null);
            alert("Error searching for Payment");
          });
      }
      //delete payment
      function handleDelete() {
        axios.delete(`http://localhost:8070/payment/delete/${receiptNumber}`)
            .then((response) => {
                alert("Payment deleted successfully");
                setPayerInName("");
                setPayerNIC("");
                setPatientNIC("");
                setAmount("");
                setReceiptNumber("");
                setDateofPayment("");
                setTime("");
              })
                .catch((error) => {
                    console.error(error);
                    alert("Error deleting Payment");
                });
            }
       
        //update payment    
        function handleUpdate() {  
            const updatedPayment = {
                dateofpayment,
                amount,
                receiptNumber,
                payerInName,
                payerNIC,
                patientNIC,
                time,
            }
            axios.put(`http://localhost:8070/payment/update/${receiptNumber}`, updatedPayment)
            .then((response) => {
                alert("Payment updated successfully");
               
            })
            .catch((error) => {
                console.error(error);
                alert("Error Updating Payment")
            })
        } 
        
      //clear data
    function clearForm() {
        setPayerInName("");
        setPayerNIC("");
        setPatientNIC(""); 
        setAmount("");
        setReceiptNumber("");
        setDateofPayment("");
        setTime("");

        alert("Cleared form");
    }

    return (
        <Form>
            <fieldset>
                <legend><b>Payer Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Payer Name</Form.Label>
                        <Form.Control
                            id="payerNameInput"
                            onChange={(e) => setPayerInName(e.target.value)}
                            value={payerInName} />
                    </Col>
                    <Col>
                        <Form.Label>Payer NIC</Form.Label>
                        <Form.Control
                            id="payerNICInput"
                            onChange={(e) => setPayerNIC(e.target.value)}
                            value={payerNIC} />
                    </Col>
                </Row>
            </fieldset><hr></hr>

            <fieldset>
                <legend><b>Patient Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Patient NIC</Form.Label>
                        <Form.Control
                            id="patientNICInput"
                            onChange={(e) => setPatientNIC(e.target.value)}
                            value={patientNIC} />
                    </Col>
                </Row>    
            </fieldset>

            <fieldset>
                <legend><b>Payment Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            id="AmountInput"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount} />
                    </Col>
                </Row>
                <Row>    
                    <Col>
                        <Form.Label>Receipt Number</Form.Label>
                        <Form.Control
                            id="receiptNumberInput"
                            onChange={(e) => setReceiptNumber(e.target.value)}
                            value={receiptNumber} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                         <Form.Label> Date of Payment</Form.Label>
                         <Form.Control
                            type="date"
                            name="dateofpayment"
                            id='dateofpaymentInput'
                            value={dateofpayment}
                            onChange={(e) => setDateofPayment(e.target.value)}
                          />
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            id="timeInput"
                            onChange={(e) => setTime(e.target.value)}
                            value={time} />
                    </Col>
                </Row>    
            </fieldset><hr></hr>
             <Button variant="success" onClick={sendData}>Enter</Button>{' '}
             <Button variant="secondary" onClick={handleSearch}>Search</Button>{' '}
             <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
             <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
             <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

        </Form>
      );
}
      export default PaymentForm;