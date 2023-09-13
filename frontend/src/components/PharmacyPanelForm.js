
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { set } from 'mongoose';


function PharmacyForm() {

    const [medicine_name, setmedicine_name] = useState("");
    const [medicine_id, setmedicine_id] = useState("");
    const [med_date, setDate] = useState("");
    const [quntity, setquntity] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    //add medicine
    function sendData(e) {
        e.preventDefault();
        const newMedicine = {
            medicine_name,
            medicine_id,
            med_date,
            quntity,
        }
        axios.post("http://localhost:8070/medicine/add", newMedicine).then(() => {
            alert("Medicine added");
            setmedicine_name("");
            setmedicine_id("");
            setDate("");
            setquntity("");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        })
    }

    //search medicine
    function populateFormWithFetchedData() {


        if (searchResult) {

            setmedicine_name(searchResult.medicineObj.medicine_name);
            setmedicine_id(searchResult.medicineObj.medicine_id);
            setDate(searchResult.medicineObj.med_date);
            setquntity(searchResult.medicineObj.quntity);


            alert("Populated form");
        }
    }

    useEffect(() => {
        populateFormWithFetchedData();
    }, [searchResult]);

    function handleSearch() {
        axios.get(`http://localhost:8070/medicine/get/${medicine_id}`)

            .then((response) => {
                setSearchResult(response.data);
                if (response.data) {
                    alert("Medicine found");
                    console.log(response.data);
                    populateFormWithFetchedData()
                } else {
                    alert("Medicine not found");
                }
            })
            .catch((error) => {
                console.error(error);
                setSearchResult(null);
                alert("Error searching for Medicine");
            });
    }
    //delete medicine
    function handleDelete() {
        axios.delete(`http://localhost:8070/medicine/delete/${medicine_id}`)
            .then((response) => {
                alert("Medicine deleted successfully");
                setmedicine_name("");
                setmedicine_id("");
                setDate("");
                setquntity("");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                alert("Error deleting Medicine");
            });
    }

    //update medicine   
    function handleUpdate() {
        const updatedMedicine = {
            medicine_name,
            medicine_id,
            med_date,
            quntity,
        }
        axios.put(`http://localhost:8070/medicine/update/${medicine_id}`, updatedMedicine)
            .then((response) => {
                alert("Medicine updated successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                alert("Error Updating Medicine")
            })
    }

    //clear data
    function clearForm() {
        setmedicine_name("");
        setmedicine_id("");
        setDate("");
        setquntity("");
        
        alert("Cleared form");
    }

    return (
        <Form>
            <fieldset>
                {/* <legend><b>Medicine Name</b></legend> */}
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
                {/* <legend><b>Patient Information</b></legend> */}
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
                {/* <legend><b>Payment Information</b></legend> */}

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
            <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
            <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

        </Form>
    );
}
export default PharmacyForm;