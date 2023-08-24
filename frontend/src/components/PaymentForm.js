import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

 
function PaymentForm(){
   
    
    const [dateofpayment, setdateofpayment] = useState("");
    const [amount, setamount] = useState("");
    const [receiptNumber, setreceiptNumber] = useState("");
    const [payerInName, setpayerInName] = useState(""); 
    const [payerNIC, setpayerNIC] = useState("");   
    const [patientNIC, setpatientNIC] = useState("");   
    const [time, settime] = useState("");

    const [searchResult, setSearchResult] = useState(null);

    function sendData(e) {
        e.preventDefault();
        const newPayment = {
            dateofpayment,amount,receiptNumber,payerInName,payerNIC,patientNIC,time
        }
        axios.post("http://localhost:8070/payment/add", newPayment).then(() => {
            alert("Payment added");
            setdateofpayment("");
            setamount("");
            setreceiptNumber("");
            setpayerInName("");
            setpayerNIC("");
            setpatientNIC("");
            settime("");
        }).catch((error) => {
            console.error(error);
            alert("Error adding Payment");
        })
    }

  //search payment
   function populateFormWithFetchedData(){

    console.log(searchResult);
    //return;

    if (searchResult) {
      setdateofpayment(searchResult.payment.dateofpayment);
      setamount(searchResult.payment.amount);
      setreceiptNumber(searchResult.payment.receiptNumber);
      setpayerInName(searchResult.payment.payerInName);
      setpayerNIC(searchResult.payment.payerNIC);
      setpatientNIC(searchResult.payment.patientNIC);
      settime(searchResult.payment.time);

     document.getElementById("dateofpayment").value=searchResult.payment.dateofpayment;
     document.getElementById("amount").value=searchResult.payment.amount;
     document.getElementById("receiptNumber").value=searchResult.payment.receiptNumber;
     document.getElementById("payerInName").value=searchResult.payment.payerInName;
     document.getElementById("payerNIC").value=searchResult.payment.payerNIC;
     document.getElementById("patientNIC").value=searchResult.payment.patientNIC;
     document.getElementById("time").value=searchResult.payment.time;
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
                setdateofpayment("");
                setamount("");
                setreceiptNumber("");
                setpayerInName("");
                setpayerNIC("");
                setpatientNIC("");
                settime("");
              })
                .catch((error) => {
                    console.error(error);
                    alert("Error deleting Payment");
                });
            }
       
        //update payment    
        function handleUpdate() {  
            const updatedPayment = {
                dateofpayment,amount,receiptNumber,payerInName,payerNIC,patientNIC,time
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
        setdateofpayment("");
        setamount("");
        setreceiptNumber("");
        setpayerInName("");
        setpayerNIC("");
        setpatientNIC("");
        settime("");

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
                            onChange={(e) => setpayerInName(e.target.value)}
                            value={payerInName} />
                    </Col>
                    <Col>
                        <Form.Label>Payer NIC</Form.Label>
                        <Form.Control
                            id="payerNICInput"
                            onChange={(e) => setpayerNIC(e.target.value)}
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
                            onChange={(e) => setpatientNIC(e.target.value)}
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
                            onChange={(e) => setamount(e.target.value)}
                            value={amount} />
                    </Col>
                </Row>
                <Row>    
                    <Col>
                        <Form.Label>Receipt Number</Form.Label>
                        <Form.Control
                            id="receiptNumberInput"
                            onChange={(e) => setreceiptNumber(e.target.value)}
                            value={receiptNumber} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Date of Payment</Form.Label>
                        <Form.Control
                            id="dateofpaymentInput"
                            onChange={(e) => setdateofpayment(e.target.value)}
                            value={dateofpayment} />
                    </Col> 
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            id="timeInput"
                            onChange={(e) => settime(e.target.value)}
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