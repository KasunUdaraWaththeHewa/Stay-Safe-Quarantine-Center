import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function DoctorForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [medicalLicenseNo, setMedicalLicenseNumber] = useState("");
  const [specialization, setSpecilization] = useState("");
  const [professionalExperience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [avalibleDays, setAvalibleDays] = useState("");
  const [emergencycontactNumber, setEmergencycontactNumber] = useState("");
  const [gender, setGender] = useState('Male');
  const [relationship, setRelationship] = useState("Married");
  const [skillsAndTraining, setSkills] = useState(null);

  const [searchResult, setSearchResult] = useState(null);
  //add Doctor
  function sendData(e) {
    e.preventDefault();
    const newDoctor = {
      firstName, lastName, doctorID, phoneNumber, email, medicalLicenseNo, specialization, professionalExperience, address, avalibleDays, emergencycontactNumber, gender, relationship, skillsAndTraining
    }
    axios.post("http://localhost:8070/doctor/add", newDoctor).then(() => {
      alert("Doctor added");
      setFirstName("")
      setLastName("")
      setDoctorID("")
      setPhoneNumber("")
      setEmail("")
      setMedicalLicenseNumber("")
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

  //serach doctor
  function populateFormWithFetchedData() {
    if (searchResult) {
      setFirstName(searchResult.firstName);
      setLastName(searchResult.lastName);
      setDoctorID(searchResult.doctorID);
      setPhoneNumber(searchResult.phoneNumber);
      setEmail(searchResult.email);
      setMedicalLicenseNumber(searchResult.medicalLicenseNo);
      setSpecilization(searchResult.specialization);
      setExperience(searchResult.professionalExperience);
      setAddress(searchResult.address);
      setAvalibleDays(searchResult.avalibleDays);
      setEmergencycontactNumber(searchResult.emergencycontactNumber);
      setGender(searchResult.gender);
      setRelationship(searchResult.relationship);
      setSkills(searchResult.skills);

      document.getElementById("firstNameInput").value = firstName;
      document.getElementById("lastNameInput").value = lastName;
      document.getElementById("doctorIDInput").value = doctorID;
      document.getElementById("phoneNumberInput").value = phoneNumber;
      document.getElementById("emailInput").value = email;
      document.getElementById("medicalLicenseNoInput").value = medicalLicenseNo;
      document.getElementById("specializationInput").value = specialization;
      document.getElementById("professionalExperienceInput").value = professionalExperience;
      document.getElementById("addressInput").value = address;
      document.getElementById("avalibleDaysInput").value = avalibleDays;
      document.getElementById("emergencyContactNumbersInput").value = emergencycontactNumber;
      document.getElementById("genderInput").value = gender;
      document.getElementById("relationshipInput").value = relationship;
      alert("Populated form");
    }
  }

  useEffect(() => {
    
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/doctor/get/${doctorID}`)
      .then((response) => {
        setSearchResult(response.data);
        alert("Doctor found");
        populateFormWithFetchedData();
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        alert("Doctor not found");
      });
  }
  // delete doctor
  function handleDelete() {
    axios.delete(`http://localhost:8070/doctor/delete/${doctorID}`)
      .then((response) => {
        alert("Doctor deleted successfully");
        setFirstName("")
        setLastName("")
        setDoctorID("")
        setPhoneNumber("")
        setEmail("")
        setMedicalLicenseNumber("")
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
        alert("Error deleting doctor");
      });
  }
  //update doctor details
  function handleUpdate() {
    const updatedDoctor = {
      firstName,
      lastName,
      phoneNumber,
      email,
      medicalLicenseNo,
      specialization,
      professionalExperience,
      address,
      avalibleDays,
      emergencycontactNumber,
      gender,
      relationship,
      skillsAndTraining,
    };

    axios.put(`http://localhost:8070/doctor/update/${doctorID}`, updatedDoctor)
      .then((response) => {
        alert("Doctor updated successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating doctor");
      });
  }

  //clear data
  function clearForm() {
    setFirstName("");
    setLastName("");
    setDoctorID("");
    setPhoneNumber("");
    setEmail("");
    setMedicalLicenseNumber("");
    setSpecilization("");
    setExperience("");
    setAddress("");
    setAvalibleDays("");
    setEmergencycontactNumber("");
    setGender("Male");
    setRelationship("Married");
    setSkills(null);

    alert("Cleared form");
  }

  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" id='firstNameInput' onChange={(e) => setFirstName(e.target.value)}  value={firstName} />
        </Col>
        <Col>
          <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name" id='lastNameInput' onChange={(e) => setLastName(e.target.value)} value={lastName}  />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Doctor ID</Form.Label>
          <Form.Control placeholder="Doctor ID" id='doctorIDInput' onChange={(e) => setDoctorID(e.target.value)}  value={doctorID} />
        </Col>
        <Col>
          <Form.Label>Phone number</Form.Label>
          <Form.Control placeholder="Phone number" id='phoneNumberInput' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}  />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" id='emailInput' onChange={(e) => setEmail(e.target.value)} value={email}  />
        </Form.Group>

        <Col>
          <Form.Label>Medical license Number</Form.Label>
          <Form.Control placeholder="Medical license Number"id='medicalLicenseNoInput' onChange={(e) => setMedicalLicenseNumber(e.target.value)}  value={medicalLicenseNo} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Specialization</Form.Label>
          <Form.Control placeholder="Specialization"id='specializationInput' onChange={(e) => setSpecilization(e.target.value)} value={specialization}  />
        </Col>
        <Col>
          <Form.Label>Professional Experience</Form.Label>
          <Form.Control placeholder="Professional Experience"id='professionalExperienceInput' onChange={(e) => setExperience(e.target.value)} value={professionalExperience}  />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1"id='addressInput' onChange={(e) => setAddress(e.target.value)} value={address}  >
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Label>Available Days</Form.Label>
          <Form.Control placeholder="Available Days"id='avalibleDaysInput' onChange={(e) => setAvalibleDays(e.target.value)}  value={avalibleDays} />
        </Col>
        <Col>
          <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control placeholder="Emergency Contact number"id='emergencyContactNumbersInput' onChange={(e) => setEmergencycontactNumber(e.target.value)} value={emergencycontactNumber}  />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={gender}id='genderInput' onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Relationship</Form.Label>

            <Form.Select value={relationship}id='relationshipInput' onChange={(e) => setRelationship(e.target.value)}>
              <option value="Married">Married</option>
              <option value="Unmarried">Unmarried</option>
            </Form.Select>
          </Form.Group>
        </Col>

      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter skills, Training, and Certification details in pdf format</Form.Label>
        <Form.Control type="file"id='skillsInput' onChange={(e) => setSkills(e.target.files[0])}  value={skillsAndTraining} />
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

export default DoctorForm;