import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function KichenkichenForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [address, setAddress] = useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");
  const [skills, setSkills] = useState("");

  const [searchResult, setSearchResult] = useState(null);

  //add member
  function sendData(e) {
    e.preventDefault();
    const newkichen = {
      firstName, lastName, employeeID, phoneNumber, email, jobRole, address, emergencyContactNumber, gender, relationship, skills
    }
    axios.post("http://localhost:8070/kichen/add", newkichen).then(() => {
      alert("kichen added");
      setFirstName("")
      setLastName("")
      setEmployeeID("")
      setPhoneNumber("")
      setEmail("")
      setJobRole("")
      setAddress("")
      setEmergencyContactNumber("")
      setGender("Male")
      setRelationship("Married")
      setSkills("")
      window.location.reload();
    }).catch((err) => {
      alert(err)
    })
  }


  //search member

  function populateFormWithFetchedData() {
    if (searchResult) {
      setFirstName(searchResult.user.firstName);
      setLastName(searchResult.user.lastName);
      setEmployeeID(searchResult.user.employeeID);
      setPhoneNumber(searchResult.user.phoneNumber);
      setEmail(searchResult.user.email);
      setJobRole(searchResult.user.jobRole);
      setAddress(searchResult.user.address);
      setEmergencyContactNumber(searchResult.user.emergencyContactNumber);
      setGender(searchResult.user.gender);
      setRelationship(searchResult.user.relationship);
      setSkills(searchResult.user.skills);

      document.getElementById("firstNameInput").value = firstName;
      document.getElementById("lastNameInput").value = lastName;
      document.getElementById("employeeIDInput").value = employeeID;
      document.getElementById("phoneNumberInput").value = phoneNumber;
      document.getElementById("emailInput").value = email;
      document.getElementById("jobRoleInput").value = jobRole;
      document.getElementById("addressInput").value = address;
      document.getElementById("emergencyContactNumberInput").value = emergencyContactNumber;
      document.getElementById("genderInput").value = gender;
      document.getElementById("relationshipInput").value = relationship
      

      alert("Populated form");
    }
  }

  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/kichen/get/${employeeID}`)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          alert("member found");
          console.log(response.data);
          populateFormWithFetchedData(response.data);
        } else {
          alert("member not found");
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        alert("Error searching for member");
      });
  }
  
  //delete kichen member

  function handleDelete() {
    axios.delete(`http://localhost:8070/kichen/delete/${employeeID}`)
      .then((response) => {
        alert("member deleted successfully");
        setFirstName("");
        setLastName("");
        setEmployeeID("");
        setPhoneNumber("");
        setEmail("");
        setJobRole("");
        setAddress("");
        setEmergencyContactNumber("");
        setGender("Male");
        setRelationship("Married");
        setSkills("");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting member");
      });
  }
//update kichen member

function handleUpdate() {
  const updatedkichen = {
    firstName,
    lastName,
    employeeID,
    phoneNumber,
    email,
    jobRole,
    address,
    emergencyContactNumber,
    gender,
    relationship,
    skills,
  };

  axios.put(`http://localhost:8070/kichen/update/${employeeID}`, updatedkichen)
    .then((response) => {
      alert("kichen member updated successfully");
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      alert("Error updating kichen member");
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
  setEmergencyContactNumber("");
  setGender("");
  setRelationship("");
  setSkills();
  alert("Cleared form");
}
  return (
    <Form>

      <Row className="mb-3">
        <Col>
          <Form.Label>First name</Form.Label>
          <Form.Control id='firstNameInput' onChange={(e) => {
            setFirstName(e.target.value)
          }}
          value={firstName} />
        </Col>
        <Col>
          <Form.Label>Last name</Form.Label>
          <Form.Control id='lastNameInput'onChange={(e) => {
            setLastName(e.target.value)
          }}
          value={lastName} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Employee ID</Form.Label>
          <Form.Control id='employeeIDInput' onChange={(e) => {
            setEmployeeID(e.target.value)
          }}
          value={employeeID} />
        </Col>
        <Col>
          <Form.Label>Phone number</Form.Label>
          <Form.Control id='phoneNumberInput' onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
          value={phoneNumber} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" id='emailInput' onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email} />
        </Form.Group>

        <Col>
          <Form.Label>Job Role</Form.Label>
          <Form.Control id='jobRoleInput' onChange={(e) => {
            setJobRole(e.target.value)
          }}
          value={jobRole} />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control id='addressInput' onChange={(e) => {
          setAddress(e.target.value)
        }}
        value={address} />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control id='emergencyContactNumberInput'onChange={(e) => {
            setEmergencyContactNumber(e.target.value)
          }} 
          value={emergencyContactNumber}/>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={gender} id='genderInput' onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Relationship</Form.Label>
            <Form.Select value={relationship} id='relationshipInput' onChange={(e) => setRelationship(e.target.value)}>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </Form.Select>
          </Form.Group>
        </Col>

      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter your skills , Training and Certification details in pdf format</Form.Label>
        <Form.Control type="file"  id='skillsInput' onChange={(e) => {
          setSkills(e.target.value)
        }}
        />
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

export default KichenkichenForm;