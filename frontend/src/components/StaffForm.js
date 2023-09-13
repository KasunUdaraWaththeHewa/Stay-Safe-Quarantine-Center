import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect,useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

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
  const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added a Staff Member!',
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
      title: 'You successfully Updated a Staff Member!',
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
      title: 'Are you sure to delete Staff Member?',
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
  //add staff member
  function sendData(e) {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    e.preventDefault();
    const newStaff = {
      firstName, lastName, employeeID, phoneNumber, email, jobRole, address, staffID, emergencyContactNumber, gender, relationship, skills
    }
    axios.post("http://localhost:8070/staff/add", newStaff,config).then(() => {
      successfullyAdded();
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
      window.location.reload();
    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Staff Member.',
        'error'
      )
    })
  }


  //search staff member

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
    axios.get(`http://localhost:8070/staff/get/${staffID}`,config)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Staff Member!',
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          console.log(response.data);
          populateFormWithFetchedData(response.data);
        } else {
          Swal.fire(
            'Error!',
            'Staff Member not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Staff Member.',
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
    axios.delete(`http://localhost:8070/staff/delete/${staffID}`,config)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Staff Member!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
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
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Deleted!',
          'Error Deleting Staff Member.',
          'error'
        )
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
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  axios.put(`http://localhost:8070/staff/update/${staffID}`, updatedStaff,config)
    .then((response) => {
      successfullyUpdated();
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      Swal.fire(
        'Did not Update!',
        'Error updating Staff Member.',
        'error'
      )
    });
}

//clear form
function clearForm() {
  setFirstName("");
  setLastName("");
  setEmployeeID("");
  setStaffID("");
  setPhoneNumber("");
  setEmail("");
  setJobRole("");
  setAddress("");
  setEmergencyContactNumber("");
  setGender("");
  setRelationship("");
  setSkills();
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
          <Form.Label>staff ID</Form.Label>
          <Form.Control id='staffIDInput' onChange={(e) => {
            setStaffID(e.target.value)
          }} 
          value={staffID}/>
        </Col>
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
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Relationship</Form.Label>
            <Form.Select value={relationship} id='relationshipInput' onChange={(e) => setRelationship(e.target.value)}>
              <option value="" disabled>Select relationshiptype</option>
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
      <Button variant="danger" onClick={successfullyDeleted}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default StaffForm;