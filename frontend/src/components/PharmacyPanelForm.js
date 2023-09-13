import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect,useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { set } from 'mongoose';

function PharmacyForm(){
   
    const [medicine_name, setmedicine_name] = useState("");
    const [medicine_id, setmedicine_id] = useState("");
    const [med_date, setmed_Date] = useState("");
    const [quantity, setquantity] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const { user } = useContext(AuthContext);

    const successfullyAdded = () => {
      Swal.fire({
        title: 'You successfully Added a Medicine!',
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
        title: 'You successfully Updated a Medicine!',
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
        title: 'Are you sure to delete Medicine?',
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
    //add medicine
    function sendData(e) {
        e.preventDefault();
        const newMedicine = {
            medicine_name,
            medicine_id,
            med_date,
            quantity,
        }
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        };
        axios.post("http://localhost:8070/medicine/add", newMedicine,config).then(() => {
            successfullyAdded();
            setmedicine_name("");
            setmedicine_id("");
            setmed_Date("");
            setquantity("");
            window.location.reload();
        }).catch((err)=>{
          Swal.fire(
            'Error!',
            'Error Adding Payment.',
            'error'
          )
        })
    }

  //search medicine
   function populateFormWithFetchedData(){


    if (searchResult) {
    setmedicine_name(searchResult.medicineObj.medicine_name);
    setmedicine_id(searchResult.medicineObj.medicine_id);
    setmed_Date(searchResult.medicineObj.med_date);
    setquantity(searchResult.medicineObj.quantity);
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
        axios.get(`http://localhost:8070/medicine/get/${medicine_id}`,config)

          .then((response) => {
            setSearchResult(response.data);
            if (response.data) {
              Swal.fire({
                title: 'You successfully found the Medicine!',
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
                'Medicine not found.',
                'error'
              )
            }
          })
          .catch((error) => {
            console.error(error);
            setSearchResult(null);
            Swal.fire(
              'Error!',
              'Error Searching Medicine.',
              'error'
            )
          });
      }
      //delete medicine
      function handleDelete() {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
        axios.delete(`http://localhost:8070/medicine/delete/${medicine_id}`,config)
            .then((response) => {
              Swal.fire({
                title: 'You successfully Deleted the Medicine!',
                icon: 'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              
                setmedicine_name("");
                setmedicine_id("");
                setmed_Date("");
                setquantity("");
                window.location.reload();
              })
                .catch((error) => {
                    console.error(error);
                    Swal.fire(
                      'Deleted!',
                      'Error Deleting Medicine.',
                      'error'
                    )
                });
            }
       
        //update medicine   
        function handleUpdate() {  
            const config = {
                headers: {
                  Authorization: `Bearer ${user.token}`
                }
              };
            const updatedMedicine = {
                medicine_name,
                medicine_id,
                med_date,
                quantity,

            }
            axios.put(`http://localhost:8070/medicine/update/${medicine_id}`, updatedMedicine,config)
            .then((response) => {
                successfullyUpdated();
                window.location.reload();               
            })
            .catch((error) => {
                console.error(error);
                Swal.fire(
                  'Did not Update!',
                  'Error updating Medicine.',
                  'error'
                )
            })
        } 
        
      //clear data
    function clearForm() {
         setmedicine_name("");
         setmedicine_id("");
         setmed_Date("");
         setquantity("");
    }

    return (
        <Form>
             
            <fieldset>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Medicine Name</Form.Label>
                        <Form.Control
                               id="medicine_nameInput"
                            onChange={(e) => setmedicine_name(e.target.value)}
                            value={medicine_name} />
                    </Col>
                </Row>
            </fieldset><hr></hr>

            <fieldset>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Medicine ID</Form.Label>
                        <Form.Control
                            id="medicine_idInput"
                            onChange={(e) => setmedicine_id(e.target.value)}
                            value={medicine_id} />
                    </Col>
                </Row>
            </fieldset>

            <fieldset>
                <Row>
                    <Col>
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control
                            id="quantityInput"
                            onChange={(e) => setquntity(e.target.value)}
                            value={quntity} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label> Date </Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            id='dateInput'
                            value={med_date}
                            onChange={(e) => setDate(e.target.value)}
                        />
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
      export default PharmacyForm;