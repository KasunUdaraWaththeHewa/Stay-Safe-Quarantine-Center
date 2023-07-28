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

  function sendData(e) {
    e.preventDefault();
    const newNurse = {
      firstName, lastName, nurseID, phoneNumber, email, nursingLicenseNo, specialization, professionalExperience, address, avalibleDays, emergencyContactNumbers, gender, relationship, skillsAndTraining
    }
    axios.post("http://localhost:8070/nurse/add", newNurse).then(() => {
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
    }).catch((err) => {
      alert(err)
    })
  }



  function populateFormWithFetchedData() {
    if (searchResult) {
      setFirstName(searchResult.user.firstName);
      setLastName(searchResult.user.lastName);
      setNurseID(searchResult.user.nurseID);
      setPhoneNumber(searchResult.user.phoneNumber);
      setEmail(searchResult.user.email);
      setNursingLicenseNumber(searchResult.user.nursingLicenseNo);
      setSpecilization(searchResult.user.specialization);
      setExperience(searchResult.user.professionalExperience);
      setAddress(searchResult.user.address);
      setAvalibleDays(searchResult.user.avalibleDays);
      setEmergencycontactNumber(searchResult.user.emergencyContactNumber);
      setGender(searchResult.user.gender);
      setRelationship(searchResult.user.relationship);
      setSkills(searchResult.user.skillsAndTraining);

      document.getElementById("firstNameInput").value = firstName;
      document.getElementById("lastNameInput").value = lastName;
      document.getElementById("nurseIDInput").value = nurseID;
      document.getElementById("phoneNumberInput").value = phoneNumber;
      document.getElementById("emailInput").value = email;
      document.getElementById("nursingLicenseNoInput").value = nursingLicenseNo;
      document.getElementById("specializationInput").value = specialization;
      document.getElementById("professionalExperienceInput").value = professionalExperience;
      document.getElementById("addressInput").value = address;
      document.getElementById("avalibleDaysInput").value = avalibleDays;
      document.getElementById("emergencyContactNumbersInput").value = emergencyContactNumbers;
      document.getElementById("genderInput").value = gender;
      document.getElementById("relationshipInput").value = relationship;
      
     
      alert("Populated form");
    }
  }

  useEffect(() => {

  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/nurse/get/${nurseID}`)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          alert("Nurse found");
          console.log(response.data);
          populateFormWithFetchedData(response.data);
        } else {
          alert("Nurse not found");
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        alert("Error searching for Nurse");
      });
  }
  //delete staff member

  function handleDelete() {
    axios.delete(`http://localhost:8070/nurse/delete/${nurseID}`)
      .then((response) => {
        alert("Nurse deleted successfully");
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
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting nurse");
      });
  }
  //update nurse
  function handleUpdate() {
    const updatedNurse = {
      firstName,
      lastName,
      phoneNumber,
      email,
      nursingLicenseNo,
      specialization,
      professionalExperience,
      address,
      avalibleDays,
      emergencyContactNumbers,
      gender,
      relationship,
      skillsAndTraining,
    };

    axios.put(`http://localhost:8070/nurse/update/${nurseID}`, updatedNurse)
      .then((response) => {
        alert("Nurse updated successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating nurse");
      });
  }
  //clear data
  function clearForm() {
    setFirstName("");
    setLastName("");
    setNurseID("");
    setPhoneNumber("");
    setEmail("");
    setNurseID("");
    setNursingLicenseNumber("");
    setSpecilization("");
    setExperience("");
    setAddress("");
    setAvalibleDays("");
    setEmergencycontactNumber("");
    setGender("");
    setRelationship("");
    setSkills(null);

    alert("Cleared form");
  }
  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>First name</Form.Label>
          <Form.Control  onChange={(e) => setFirstName(e.target.value)} id='firstNameInput' value={firstName} />
        </Col>
        <Col>
          <Form.Label>Last name</Form.Label>
          <Form.Control onChange={(e) => setLastName(e.target.value)}id='lastNameInput' value={lastName} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Nurse ID</Form.Label>
          <Form.Control  onChange={(e) => setNurseID(e.target.value)}id='nurseIDInput' value={nurseID}  />
        </Col>
        <Col>
          <Form.Label>Phone number</Form.Label>
          <Form.Control  onChange={(e) => setPhoneNumber(e.target.value)}id='phoneNumberInput' value={phoneNumber} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}id='emailInput' value={email} />
        </Form.Group>

        <Col>
          <Form.Label>Nursing license Number</Form.Label>
          <Form.Control  onChange={(e) => setNursingLicenseNumber(e.target.value)}id='nursingLicenseNoInput' value={nursingLicenseNo}  />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Specialization</Form.Label>
          <Form.Control onChange={(e) => setSpecilization(e.target.value)}id='specializationInput' value={specialization} />
        </Col>
        <Col>
          <Form.Label>Professional Experience</Form.Label>
          <Form.Control  onChange={(e) => setExperience(e.target.value)}id='professionalExperienceInput' value={professionalExperience}  />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control  id='addressInput' onChange={(e) => setAddress(e.target.value)}value={address}  />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Label>Available Days</Form.Label>
          <Form.Control  id='avalibleDaysInput' onChange={(e) => setAvalibleDays(e.target.value)} value={avalibleDays} />
        </Col>
        <Col>
          <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control  id='emergencyContactNumbersInput' onChange={(e) => setEmergencycontactNumber(e.target.value)}value={emergencyContactNumbers}  />
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
        <Form.Label>Enter skills, Training, and Certification details in pdf format</Form.Label>
        <Form.Control type="file" id='skillsInput' onChange={(e) => setSkills(e.target.files[0])} />
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
      <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
      <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default NurseForm;