import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function NurseForm() {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nurseID, setNurseID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [nursingLicenseNo, setNursingLicenseNumber] = useState("");
    const [specialization, setSpecilization] = useState("");
    const [professionalExperience, setExperience] = useState("");
    const [address, setAddress] = useState("");
    const [avalibleDays, setAvalibleDays] = useState("");
    const [emergencyContactNumbers, setEmergencycontactNumber] = useState("");
    const [gender, setGender] = useState("");
    const [relationship, setRelationship] = useState("");
    const [skillsAndTraining, setSkills] = useState("");

    const [searchResult, setSearchResult] = useState(null);
    
    function sendData(e){
      e.preventDefault();
      const newNurse={
        firstName,lastName,nurseID,phoneNumber,email,nursingLicenseNo,specialization,professionalExperience,address,avalibleDays,emergencyContactNumbers,gender,relationship,skillsAndTraining
      }
      axios.post("http://localhost:8070/nurse/add",newNurse).then(()=>{
        alert("Nurse added");
        setFirstName("")
        setLastName("")
        setNurseID("")
        setPhoneNumber("")
        setEmail("")
        setNursingLicenseNumber("")
        setSpecilization("")
        setExperience("")
        setAddress("")
        setAvalibleDays("")
        setEmergencycontactNumber("")
        setGender("Male")
        setRelationship("Married")
        setSkills(null)
      }).catch((err)=>{
        alert(err)
      })
    }



    function populateFormWithFetchedData() {
      if (searchResult) {
        setFirstName(searchResult.firstName);
        setLastName(searchResult.lastName);
        setNurseID(searchResult.nurseID);
        setPhoneNumber(searchResult.phoneNumber);
        setEmail(searchResult.email);
        setNursingLicenseNumber(searchResult.nursingLicenseNo);
        setSpecilization(searchResult.specialization);
        setExperience(searchResult.professionalExperience);
        setAddress(searchResult.address);
        setAvalibleDays(searchResult.avalibleDays);
        setEmergencycontactNumber(searchResult.emergencyContactNumber);
        setGender(searchResult.gender);
        setRelationship(searchResult.relationship);
        setSkills(searchResult.skills);
      }
    }
  
    useEffect(() => {
      populateFormWithFetchedData();
    }, [searchResult]);
  
    function handleSearch() {
      axios.get(`http://localhost:8070/nurse/get/${nurseID}`)
        .then((response) => {
          setSearchResult(response.data);
          alert("Nurse found");
        })
        .catch((error) => {
          console.error(error);
          setSearchResult(null);
          alert("Nurse not found");
        });
    }
    

  return (
    <Form>
      <Row className="mb-3">
        <Col>
            <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" onChange={(e) => setFirstName(e.target.value)}   />
        </Col>
        <Col>
            <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name" onChange={(e) => setLastName(e.target.value)}   />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
            <Form.Label>Nurse ID</Form.Label>
          <Form.Control placeholder="Nurse ID" onChange={(e) => setNurseID(e.target.value)}   />
        </Col>
        <Col>
            <Form.Label>Phone number</Form.Label>
          <Form.Control placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)}   />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}   />
        </Form.Group>

        <Col>
            <Form.Label>Nursing license Number</Form.Label>
          <Form.Control placeholder="Medical license Number" onChange={(e) => setNursingLicenseNumber(e.target.value)}   />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
            <Form.Label>Specialization</Form.Label>
          <Form.Control placeholder="Specialization" onChange={(e) => setSpecilization(e.target.value)}   />
        </Col>
        <Col>
            <Form.Label>Professional Experience</Form.Label>
          <Form.Control placeholder="Professional Experience" onChange={(e) => setExperience(e.target.value)}   />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" onChange={(e) => setAddress(e.target.value)}   />
      </Form.Group>

      <Row className="mb-3">
        <Col>
            <Form.Label>Available Days</Form.Label>
          <Form.Control placeholder="Available Days" onChange={(e) => setAvalibleDays(e.target.value)}   />
        </Col>
        <Col>
            <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control placeholder="Emergency Contact number" onChange={(e) => setEmergencycontactNumber(e.target.value)}   />
        </Col>
      </Row>
      <Row className="mb-3">
      <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Relationship</Form.Label>

            <Form.Select value={relationship} onChange={(e) => setRelationship(e.target.value)}>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </Form.Select>
          </Form.Group>
        </Col>

        
      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter skills, Training, and Certification details in pdf format</Form.Label>
        <Form.Control type="file" onChange={(e) => setSkills(e.target.files[0])} />
      </Form.Group>
      <br />
      <Row>
            <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Col>
            <Col>
            
            </Col>
      </Row>
      <br />
      <br />
      <Button variant="success" onClick={sendData}>Enter</Button>{' '}
      <Button variant="secondary" onClick={handleSearch}>Search</Button>{' '}
      <Button variant="primary">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
      <Button variant="success">Clear</Button>{' '}
      
    </Form>
  );
}

export default NurseForm;