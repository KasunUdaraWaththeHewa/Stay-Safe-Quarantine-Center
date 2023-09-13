import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect,useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

function PaymentForm(){
   
    const [payerInName, setPayerInName] = useState(""); 
    const [payerNIC, setPayerNIC] = useState("");
    const [patientNIC, setPatientNIC] = useState(""); 
    const [amount, setAmount] = useState("");    
    const [receiptNumber, setReceiptNumber] = useState("");
    const [dateofpayment, setDateofPayment] = useState("");
    const [time, setTime] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const { user } = useContext(AuthContext);

    const successfullyAdded = () => {
      Swal.fire({
        title: 'You successfully Added a Payment!',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    };
    const successfullyUpdated = () => {
      Swal.fire({
        title: 'You successfully Updated a Payment!',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    };
    const successfullyDeleted = () => {
      Swal.fire({
        title: 'Are you sure to delete Payment?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          handleDelete();
        }
      })
    };
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
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
        axios.post("http://localhost:8070/payment/add", newPayment,config).then(() => {
            successfullyAdded();
            setPayerInName("");
            setPayerNIC("");
            setPatientNIC("");
            setAmount("");
            setReceiptNumber("");
            setDateofPayment(""); 
            setTime("");
            window.location.reload();
        }).catch((err)=>{
          Swal.fire(
            'Error!',
            'Error Adding Payment.',
            'error'
          )
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
     } 
    }  

    useEffect(() => {
        populateFormWithFetchedData();
    }, [searchResult]);

    function handleSearch() {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
        axios.get(`http://localhost:8070/payment/get/${receiptNumber}`,config)

          .then((response) => {
            setSearchResult(response.data);
            if (response.data) {
              Swal.fire({
                title: 'You successfully found the Payment!',
                icon: 'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              console.log(response.data);
              populateFormWithFetchedData()
            } else {
              Swal.fire(
                'Error!',
                'Payment not found.',
                'error'
              )
            }
          })
          .catch((error) => {
            console.error(error);
            setSearchResult(null);
            Swal.fire(
              'Error!',
              'Error Searching Payment.',
              'error'
            )
          });
      }
      //delete payment
      function handleDelete() {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
        axios.delete(`http://localhost:8070/payment/delete/${receiptNumber}`,config)
            .then((response) => {
              Swal.fire({
                title: 'You successfully Deleted the Payment!',
                icon: 'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
                setPayerInName("");
                setPayerNIC("");
                setPatientNIC("");
                setAmount("");
                setReceiptNumber("");
                setDateofPayment("");
                setTime("");
                window.location.reload();
              })
                .catch((error) => {
                    console.error(error);
                    Swal.fire(
                      'Deleted!',
                      'Error Deleting Payment.',
                      'error'
                    )
                });
            }
       
        //update payment    
        function handleUpdate() {  
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              };
            const updatedPayment = {
                dateofpayment,
                amount,
                receiptNumber,
                payerInName,
                payerNIC,
                patientNIC,
                time,
            }
            axios.put(`http://localhost:8070/payment/update/${receiptNumber}`, updatedPayment,config)
            .then((response) => {
                successfullyUpdated();
                window.location.reload();               
            })
            .catch((error) => {
                console.error(error);
                Swal.fire(
                  'Did not Update!',
                  'Error updating Payment.',
                  'error'
                )
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
                        type="text"
                        name="amount"
                        id="AmountInput"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        placeholder="LKR"
                    />
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
                        <div style={{ display: 'flex' }}>
                            <Form.Control
                                type="time"
                                name="time"
                                id="timeInput"
                                onChange={(e) => setTime(e.target.value)}
                                value={time}
                               
                            />
                           
                        </div>
                    </Col>
                </Row>    
            </fieldset><hr></hr>
             <Button variant="success" onClick={sendData}>Enter</Button>{' '}
             <Button variant="secondary" onClick={handleSearch}>Search</Button>{' '}
             <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
             <Button variant="danger" onClick={successfullyDeleted}>Delete</Button>{' '}
             <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

        </Form>
      );
}
      export default PaymentForm;