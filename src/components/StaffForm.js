import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function StaffForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [address, setAddress] = useState("");
  const [staffID, setStaffID] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");
  const [skills, setSkills] = useState("");

  const [searchResult, setSearchResult] = useState(null);

  //add staff member
  function sendData(e) {
    e.preventDefault();
    const newStaff = {
      firstName, lastName, employeeID, phoneNumber, email, jobRole, address, staffID, emergencyContactNumber, gender, relationship, skills
    }
    axios.post("http://localhost:8070/staff/add", newStaff).then(() => {
      alert("Staff added");
      setFirstName("")
      setLastName("")
      setEmployeeID("")
      setPhoneNumber("")
      setEmail("")
      setJobRole("")
      setAddress("")
      setStaffID("")
      setEmergencyContactNumber("")
      setGender("Male")
      setRelationship("Married")
      setSkills("")
    }).catch((err) => {
      alert(err)
    })
  }


  //search staff member

  function populateFormWithFetchedData() {
    if (searchResult) {
      setFirstName(searchResult.firstName);
      setLastName(searchResult.lastName);
      setEmployeeID(searchResult.employeeID);
      setPhoneNumber(searchResult.phoneNumber);
      setEmail(searchResult.email);
      setJobRole(searchResult.jobRole);
      setAddress(searchResult.address);
      setStaffID(searchResult.staffID);
      setEmergencyContactNumber(searchResult.emergencyContactNumber);
      setGender(searchResult.gender);
      setRelationship(searchResult.relationship);
      setSkills(searchResult.skills);
    }
  }

  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/staff/get/${staffID}`)
      .then((response) => {
        setSearchResult(response.data);
        alert("Staff member found");
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        alert("Staff member not found");
      });
  }

  //delete staff member

  function handleDelete() {
    axios.delete(`http://localhost:8070/staff/delete/${staffID}`)
      .then((response) => {
        alert("Staff member deleted successfully");
        setFirstName("");
        setLastName("");
        setEmployeeID("");
        setPhoneNumber("");
        setEmail("");
        setJobRole("");
        setAddress("");
        setStaffID("");
        setEmergencyContactNumber("");
        setGender("Male");
        setRelationship("Married");
        setSkills("");
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting staff member");
      });
  }
//update staff member

function handleUpdate() {
  const updatedStaff = {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    staffID,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  };

  axios.put(`http://localhost:8070/staff/update/${staffID}`, updatedStaff)
    .then((response) => {
      alert("Staff member updated successfully");
    })
    .catch((error) => {
      console.error(error);
      alert("Error updating staff member");
    });
}

//clear form
function clearForm() {
  setFirstName("");
  setLastName("");
  setEmployeeID("");
  setPhoneNumber("");
  setEmail("");
  setJobRole("");
  setAddress("");
  setStaffID("");
  setEmergencyContactNumber("");
  setGender("Male");
  setRelationship("Married");
  setSkills("");
}
  return (
    <Form>

      <Row className="mb-3">
        <Col>
          <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" id="firstName" onChange={(e) => {
            setFirstName(e.target.value)
          }} />
        </Col>
        <Col>
          <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name" id="lastName" onChange={(e) => {
            setLastName(e.target.value)
          }} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Employee ID</Form.Label>
          <Form.Control placeholder="Employee ID" id="employeeID" onChange={(e) => {
            setEmployeeID(e.target.value)
          }} />
        </Col>
        <Col>
          <Form.Label>Phone number</Form.Label>
          <Form.Control placeholder="Phone number" id="phoneNumber" onChange={(e) => {
            setPhoneNumber(e.target.value)
          }} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </Form.Group>

        <Col>
          <Form.Label>Job Role</Form.Label>
          <Form.Control placeholder="Job Role" id="jobRole" onChange={(e) => {
            setJobRole(e.target.value)
          }} />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" id="address" onChange={(e) => {
          setAddress(e.target.value)
        }} />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Label>staff ID</Form.Label>
          <Form.Control placeholder="Staff ID" id="staffID" onChange={(e) => {
            setStaffID(e.target.value)
          }} />
        </Col>
        <Col>
          <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control placeholder="Emergency Contact number" id="emergencyContactNumber" onChange={(e) => {
            setEmergencyContactNumber(e.target.value)
          }} />
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
        <Form.Label>Enter your skills , Training and Certification details in pdf format</Form.Label>
        <Form.Control type="file" id="skills" onChange={(e) => {
          setSkills(e.target.value)
        }} />
      </Form.Group>
      <br />
      <br />
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
      <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
      <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default StaffForm;