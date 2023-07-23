import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function PatientForm() {

    const [fullName, setfullName] = useState("");
    const [gender, setGender] = useState("Male");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [nationality, setNationality] = useState("");
    const [nicNumber, setNIC] = useState("");
    const [email, setEmail] = useState("");
    const [results, setResults] = useState("Not Tested");
    const [allergies, setAllergies] = useState("");
    const [medicalsBeingTaken, setMedications] = useState("");
    const [existingMedicalCondition, setMedicalConditions] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [dateOfArrival, setDateOfArrival] = useState("");
    const [contryOfDeparture, setCountryOfDeparture] = useState("");
    const [anyTransitPoint, setANyTransitPoints] = useState("");
    const [flightOrTransportDetails, setFlightDetails] = useState("");
    const [dateOfCheckIn, setDateOfCheckin] = useState('');
    const [assignedRoomNo, setRoomNumber] = useState("");
    const [durationOfStay, setDuration] = useState("");
    const [anySpecificRequirements, setRequirements] = useState("");

    const [searchResult, setSearchResult] = useState(null);
    // add patient
    function sendData(e) {
        e.preventDefault();
        const newPatient = {
            fullName, gender, dateOfBirth, nationality, nicNumber, email, results, allergies, medicalsBeingTaken, existingMedicalCondition, symptoms, dateOfArrival, contryOfDeparture, anyTransitPoint, flightOrTransportDetails, dateOfCheckIn, assignedRoomNo, durationOfStay, anySpecificRequirements
        }
        axios.post("http://localhost:8070/patient/add", newPatient).then(() => {
            alert("Patient added");
            setfullName("")
            setGender("Male")
            setDateOfBirth("")
            setNationality("")
            setNIC("")
            setEmail("")
            setResults("Not Tested")
            setAllergies("")
            setMedications("")
            setMedicalConditions("")
            setSymptoms("")
            setDateOfArrival("")
            setCountryOfDeparture("")
            setANyTransitPoints("")
            setFlightDetails("")
            setDateOfCheckin("")
            setRoomNumber("")
            setDuration("")
            setRequirements("")
        }).catch((err) => {
            alert(err)
        })
    }
    //serach patient
    function populateFormWithFetchedData() {
        if (searchResult) {
            setfullName(searchResult.firstName);
            setGender(searchResult.lastName);
            setDateOfBirth(searchResult.doctorID);
            setNationality(searchResult.phoneNumber);
            setNIC(searchResult.email);
            setEmail(searchResult.medicalLicenseNo);
            setResults(searchResult.specialization);
            setAllergies(searchResult.professionalExperience);
            setMedications(searchResult.address);
            setMedicalConditions(searchResult.avalibleDays);
            setSymptoms(searchResult.emergencyContactNumber);
            setDateOfArrival(searchResult.gender);
            setCountryOfDeparture(searchResult.relationship);
            setANyTransitPoints(searchResult.skills);
            setFlightDetails(searchResult.flightOrTransportDetails);
            setDateOfCheckin(searchResult.dateOfCheckIn);
            setRoomNumber(searchResult.assignedRoomNo);
            setDuration(searchResult.durationOfStay);
            setRequirements(searchResult.anySpecificRequirements);

            alert("Populated form");
        }
    }

    useEffect(() => {
        
    }, [searchResult]);

    function handleSearch() {
        axios.get(`http://localhost:8070/patient/get/${nicNumber}`)
            .then((response) => {
                setSearchResult(response.data);
                alert("Patient found");
                populateFormWithFetchedData();
            })
            .catch((error) => {
                console.error(error);
                setSearchResult(null);
                alert("Patient not found");
            });
    }

    //delete staff member

    function handleDelete() {
        axios.delete(`http://localhost:8070/patient/delete/${nicNumber}`)
            .then((response) => {
                alert("pateint deleted successfully");
                setfullName("")
                setGender("Male")
                setDateOfBirth("")
                setNationality("")
                setNIC("")
                setEmail("")
                setResults("Not Tested")
                setAllergies("")
                setMedications("")
                setMedicalConditions("")
                setSymptoms("")
                setDateOfArrival("")
                setCountryOfDeparture("")
                setANyTransitPoints("")
                setFlightDetails("")
                setDateOfCheckin("")
                setRoomNumber("")
                setDuration("")
                setRequirements("")
            })
            .catch((error) => {
                console.error(error);
                alert("Error deleting patient");
            });
    }
//update patient
function handleUpdate() {
    const updatedPatient = {
      fullName,
      gender,
      dateOfBirth,
      nationality,
      nicNumber,
      email,
      results,
      allergies,
      medicalsBeingTaken,
      existingMedicalCondition,
      symptoms,
      dateOfArrival,
      contryOfDeparture,
      anyTransitPoint,
      flightOrTransportDetails,
      dateOfCheckIn,
      assignedRoomNo,
      durationOfStay,
      anySpecificRequirements,
    };

    axios.put(`http://localhost:8070/patient/update/${nicNumber}`, updatedPatient)
      .then((response) => {
        alert("Patient updated successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating patient");
      });
  }
    
  //clear data
  function clearForm() {
    setfullName("");
    setGender("Male");
    setDateOfBirth("");
    setNationality("");
    setNIC("");
    setEmail("");
    setResults("Not Tested");
    setAllergies("");
    setMedications("");
    setMedicalConditions("");
    setSymptoms("");
    setDateOfArrival("");
    setCountryOfDeparture("");
    setANyTransitPoints("");
    setFlightDetails("");
    setDateOfCheckin("");
    setRoomNumber("");
    setDuration("");
    setRequirements("");

    alert("Cleared form");
  }
    return (
        <Form>
            <fieldset>
                <legend><b>Personal Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Full name</Form.Label>
                        <Form.Control placeholder="Full name" onChange={(e) => {
                            setfullName(e.target.value)
                        }} />
                    </Col>
                    <Col>
                        <Form.Label>Gender</Form.Label>
                        <div key={`inline-radio`}>
                            <Form.Check
                                inline
                                type='radio'
                                label="Male"
                                name='gender'
                                checked={gender === 'Male'}
                                onChange={() => setGender('Male')}
                            />
                            <Form.Check
                                inline
                                type='radio'
                                label="Female"
                                name='gender'
                                checked={gender === 'Female'}
                                onChange={() => setGender('Female')}
                            />
                        </div>

                    </Col>
                    <Col>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                            type="date"
                            name="birthdate"
                            placeholder="Date of Birth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control placeholder="Nationality" onChange={(e) => {
                            setNationality(e.target.value)
                        }} />
                    </Col>
                    <Col>
                        <Form.Label>NIC Number</Form.Label>
                        <Form.Control placeholder="NIC Number" onChange={(e) => {
                            setNIC(e.target.value)
                        }} />
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </Form.Group>
                </Row>
            </fieldset>
            <hr></hr>

            <fieldset>
                <legend><b>Health Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Covid-19 test results</Form.Label>
                        <div key={`inline-radio`}>
                            <Form.Check
                                inline
                                type='radio'
                                label='Positive'
                                name='results'
                                checked={results === 'Positive'}
                                onChange={() => setResults('Positive')}
                            />
                            <Form.Check
                                inline
                                type='radio'
                                label='Negative'
                                name='results'
                                checked={results === 'Negative'}
                                onChange={() => setResults('Negative')}
                            />
                            <Form.Check
                                inline
                                type='radio'
                                label='Not Tested'
                                name='results'
                                checked={results === 'Not Tested'}
                                onChange={() => setResults('Not Tested')}
                            />
                        </div>

                    </Col>
                    <Col>
                        <Form.Label>Allergies</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Allergies here' onChange={(e) => {
                            setAllergies(e.target.value)
                        }} />
                    </Col>
                    <Col>
                        <Form.Label>Medications being taken</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Medications here' onChange={(e) => {
                            setMedications(e.target.value)
                        }} />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Existing Medical Conditions</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Medications here' onChange={(e) => {
                            setMedicalConditions(e.target.value)
                        }} />
                    </Col>
                    <Col>
                        <Form.Label>Any Symptoms experienced</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Symptoms here' onChange={(e) => {
                            setSymptoms(e.target.value)
                        }} />
                    </Col>
                </Row>
            </fieldset>
            <hr></hr>

            <fieldset>
                <legend><b>Travel Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Date of arrival in the country</Form.Label>
                        <Form.Control
                            type="date"
                            name="arrivaldate"
                            placeholder="Date of Arrival"
                            value={dateOfArrival}
                            onChange={(e) => setDateOfArrival(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Country of Departure</Form.Label>
                        <Form.Control placeholder="Departure Country" onChange={(e) => {
                            setCountryOfDeparture(e.target.value)
                        }} />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Any Transit Points</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Details here' onChange={(e) => {
                            setANyTransitPoints(e.target.value)
                        }} />
                    </Col>
                    <Col>
                        <Form.Label>Flight or Transport Details</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Details here' onChange={(e) => {
                            setFlightDetails(e.target.value)
                        }} />
                    </Col>
                </Row>
            </fieldset>
            <hr></hr>

            <fieldset>
                <legend><b>Quarantine Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Date of Check-In</Form.Label>
                        <Form.Control type="date" name="checkindate" placeholder="Date of Check-In" value={dateOfCheckIn} onChange={(e) => setDateOfCheckin(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Label>Assigned Room Number</Form.Label>
                        <Form.Control placeholder="Room Number" onChange={(e) => {
                            setRoomNumber(e.target.value)
                        }} />
                    </Col>
                    <Col>
                        <Form.Label>Duration of Stay</Form.Label>
                        <Form.Control placeholder="Duration of Stay" onChange={(e) => {
                            setDuration(e.target.value)
                        }} />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Any Specific Requirements</Form.Label>
                        <Form.Control as="textarea" rows={2} placeholder='Enter the Details here' onChange={(e) => {
                            setRequirements(e.target.value)
                        }} />
                    </Col>
                </Row>
            </fieldset>
            <hr></hr>

            <Row>
                <Col>
                    <Form.Group className="mb-2" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Col>
                <Col>

                </Col>
            </Row>
            <br></br>

            <Button variant="success" onClick={sendData}>Enter</Button>{' '}
            <Button variant="secondary" onClick={handleSearch}>Search</Button>{' '}
            <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
            <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

        </Form>
    );
}

export default PatientForm;