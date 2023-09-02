import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect,useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

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
    const { user } = useContext(AuthContext);

    const successfullyAdded = () => {
        Swal.fire({
          title: 'You successfully Added a Doctor!',
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
          title: 'You successfully Updated a Doctor!',
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
          title: 'Are you sure to delete doctor?',
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
    // add patient
    function sendData(e) {
        e.preventDefault();
        const newPatient = {
            fullName, gender, dateOfBirth, nationality, nicNumber, email, results, allergies, medicalsBeingTaken, existingMedicalCondition, symptoms, dateOfArrival, contryOfDeparture, anyTransitPoint, flightOrTransportDetails, dateOfCheckIn, assignedRoomNo, durationOfStay, anySpecificRequirements
        }
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
        axios.post("http://localhost:8070/patient/add", newPatient,config).then(() => {
            successfullyAdded();
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
            window.location.reload();
        }).catch((err) => {
            Swal.fire(
                'Error!',
                'Error Adding Patient.',
                'error'
              )
        })
    }
    //serach patient
    function populateFormWithFetchedData() {

        console.log(searchResult)
        // return;
        if (searchResult) {
            setfullName(searchResult.user.fullName);
            setGender(searchResult.user.gender);
            setDateOfBirth(searchResult.user.dateOfBirth);
            setNationality(searchResult.user.nationality);
            setNIC(searchResult.user.nicNumber);
            setEmail(searchResult.user.email);
            setResults(searchResult.user.results);
            setAllergies(searchResult.user.allergies);
            setMedications(searchResult.user.medicalsBeingTaken);
            setMedicalConditions(searchResult.user.existingMedicalCondition);
            setSymptoms(searchResult.user.symptoms);
            setDateOfArrival(searchResult.user.dateOfArrival);
            setCountryOfDeparture(searchResult.user.contryOfDeparture);
            setANyTransitPoints(searchResult.user.anyTransitPoint);
            setFlightDetails(searchResult.user.flightOrTransportDetails);
            setDateOfCheckin(searchResult.user.dateOfCheckIn);
            setRoomNumber(searchResult.user.assignedRoomNo);
            setDuration(searchResult.user.durationOfStay);
            setRequirements(searchResult.user.anySpecificRequirements);
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
        axios.get(`http://localhost:8070/patient/get/${nicNumber}`,config)
          .then((response) => {
            setSearchResult(response.data);
            if (response.data) {
                Swal.fire({
                    title: 'You successfully found the Patient!',
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
                    'Patient not found.',
                    'error'
                  )
            }
          })
          .catch((error) => {
            console.error(error);
            setSearchResult(null);
            Swal.fire(
                'Error!',
                'Error Searching Patient.',
                'error'
              )
          });
      }

    //delete staff member

    function handleDelete() {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
        axios.delete(`http://localhost:8070/patient/delete/${nicNumber}`,config)
            .then((response) => {
                Swal.fire({
                    title: 'You successfully Deleted the Patient!',
                    icon: 'success',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
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
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                Swal.fire(
                    'Deleted!',
                    'Error Deleting Patient.',
                    'success'
                  )
            });
    }
    //update patient
    function handleUpdate() {
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`
            }
          };
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

        axios.put(`http://localhost:8070/patient/update/${nicNumber}`, updatedPatient,config)
            .then((response) => {
                successfullyUpdated();
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                Swal.fire(
                    'Did not Update!',
                    'Error updating Patient.',
                    'success'
                  )
            });
    }

    //clear data
    function clearForm() {
        setfullName("");
        setGender("");
        setDateOfBirth("");
        setNationality("");
        setNIC("");
        setEmail("");
        setResults("");
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
    }
    return (
        <Form>
            <fieldset>
                <legend><b>Personal Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Full name</Form.Label>
                        <Form.Control id='fullNameInput' onChange={(e) => {
                            setfullName(e.target.value)
                        }} value={fullName} />
                    </Col>
                    <Col>
                        <Form.Label>Gender</Form.Label>
                        <div key={`inline-radio`} id='genderInput'>
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
                            id='dateOfBirthInput'
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Nationality</Form.Label>
                        <Form.Control  id='nationalityInput' onChange={(e) => {
                            setNationality(e.target.value)
                        }} value={nationality} />
                    </Col>
                    <Col>
                        <Form.Label>NIC Number</Form.Label>
                        <Form.Control id='nicNumberInput' onChange={(e) => {
                            setNIC(e.target.value)
                        }} value={nicNumber} />
                    </Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"  id='emailInput' onChange={(e) => {
                            setEmail(e.target.value)
                        }} value={email} />
                    </Form.Group>
                </Row>
            </fieldset>
            <hr></hr>

            <fieldset>
                <legend><b>Health Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Covid-19 test results</Form.Label>
                        <div key={`inline-radio`} id='resultsInput'>
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
                        <Form.Control as="textarea" rows={2}  id='allergiesInput' onChange={(e) => {
                            setAllergies(e.target.value)
                        }} value={allergies} />
                    </Col>
                    <Col>
                        <Form.Label>Medications being taken</Form.Label>
                        <Form.Control as="textarea" rows={2} id='medicalsBeingTakenInput' onChange={(e) => {
                            setMedications(e.target.value)
                        }} value={medicalsBeingTaken} />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Existing Medical Conditions</Form.Label>
                        <Form.Control as="textarea" rows={2} id='existingMedicalConditionInput' onChange={(e) => {
                            setMedicalConditions(e.target.value)
                        }} value={existingMedicalCondition} />
                    </Col>
                    <Col>
                        <Form.Label>Any Symptoms experienced</Form.Label>
                        <Form.Control as="textarea" rows={2} id='symptomsInput' onChange={(e) => {
                            setSymptoms(e.target.value)
                        }} value={symptoms} />
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
                            id='dateOfArrivalInput'
                            value={dateOfArrival}
                            onChange={(e) => setDateOfArrival(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Country of Departure</Form.Label>
                        <Form.Control  id='contryOfDepartureInput' onChange={(e) => {
                            setCountryOfDeparture(e.target.value)
                        }} value={contryOfDeparture} />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Any Transit Points</Form.Label>
                        <Form.Control as="textarea" rows={2} id='anyTransitPointInput' onChange={(e) => {
                            setANyTransitPoints(e.target.value)
                        }} value={anyTransitPoint} />
                    </Col>
                    <Col>
                        <Form.Label>Flight or Transport Details</Form.Label>
                        <Form.Control as="textarea" rows={2}  id='flightOrTransportDetailsInput' onChange={(e) => {
                            setFlightDetails(e.target.value)
                        }} value={flightOrTransportDetails} />
                    </Col>
                </Row>
            </fieldset>
            <hr></hr>

            <fieldset>
                <legend><b>Quarantine Information</b></legend>
                <Row className="mb-2">
                    <Col>
                        <Form.Label>Date of Check-In</Form.Label>
                        <Form.Control type="date" name="checkindate" value={dateOfCheckIn} id='dateOfCheckInInput' onChange={(e) => setDateOfCheckin(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Label>Assigned Room Number</Form.Label>
                        <Form.Control id='assignedRoomNoInput' onChange={(e) => {
                            setRoomNumber(e.target.value)
                        }} value={assignedRoomNo} />
                    </Col>
                    <Col>
                        <Form.Label>Duration of Stay</Form.Label>
                        <Form.Control id='durationOfStayInput' onChange={(e) => {
                            setDuration(e.target.value)
                        }} value={durationOfStay} />
                    </Col>
                </Row>

                <Row className="mb-2">
                    <Col>
                        <Form.Label>Any Specific Requirements</Form.Label>
                        <Form.Control as="textarea" rows={2} id='anySpecificRequirements' onChange={(e) => {
                            setRequirements(e.target.value)
                        }} value={anySpecificRequirements} />
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
            <Button variant="danger" onClick={successfullyDeleted}>Delete</Button>{' '}
            <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

        </Form>
    );
}

export default PatientForm;