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

function NotificationForm() {

     const [ReceiverRole, setReceiverRole] = useState("");
     const [ReceiverID, setReceiverID] = useState("");
     const [Message, setMessage] = useState("");
     const [Date, setDate] = useState("");
     const [Time, setTime] = useState("");
   //  const [Status, setStatus] = useState("");



  const [searchResult, setSearchResult] = useState(null);
  const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added a Notification!',
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
      title: 'You successfully Updated a Notification!',
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
      title: 'Are you sure to delete Notification?',
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
  function sendData(e) {
    e.preventDefault();
  
    const newNotification = {
        ReceiverRole, ReceiverID, Message, Date, Time, //Status,
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
   
        axios.post("http://localhost:8070/notification/add", newNotification,config).then(() => {
        successfullyAdded();
        setReceiverRole("")
        setReceiverID("")
        setMessage("")
        setDate("")
        setTime("")
        //setStatus("")
        window.location.reload();

    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Notification.',
        'error'
      )
    })
  }
   
  function populateFormWithFetchedData() {
    if (searchResult) {
        
            setReceiverRole(searchResult.ReceiverRole);
            setReceiverID(searchResult.ReceiverID);
            setMessage(searchResult.Message);
            setDate(searchResult.Date);
            setTime(searchResult.Time);
          //  setStatus(searchResult.Status);

           document.getElementById("ReceiverRoleInput").value = ReceiverRole;
           document.getElementById("ReceiverIDInput").value = ReceiverID;
           document.getElementById("MessageInput").value = Message;
           document.getElementById("DateInput").value = Date;
           document.getElementById("TimeInput").value = Time;
          // document.getElementById("StatusInput").value = Status; 
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

      axios.get(`http://localhost:8070/notification/get/${ReceiverRole}`,config)

      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Notification!',
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
            'Notification not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Notification.',
          'error'
        )
      });
  }
 

  function handleDelete() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
   
    axios.delete(`http://localhost:8070/notification/delete/${ReceiverRole}`,config)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Notification!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
    
            setReceiverRole("")
            setReceiverID("")
            setMessage("")
            setDate("")
            setTime("")
           // setStatus("")
            window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Deleted!',
          'Error Deleting Notification.',
          'success'
        )
      });
  }
 
  function handleUpdate() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    const updatedNotification = {
          ReceiverRole,
          ReceiverID,
          Message, 
          Date, 
          Time,
          //Status,
    };

    axios.put(`http://localhost:8070/notification/update/${ReceiverRole}`, updatedNotification,config)
      .then((response) => {
        successfullyUpdated();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Did not Update!',
          'Error updating Notification.',
          'success'
        )
      });
  }
  //clear data
  function clearForm() {
     
    setReceiverRole("");
    setReceiverID("");
    setMessage("");
    setDate("");
    setTime("");
  //  setStatus("");

  }
  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>Receiver Role</Form.Label>
          <Form.Control onChange={(e) => setReceiverRole(e.target.value)} id='ReceiverRoleInput' value={ReceiverRole} />
        </Col>
        <Col>
          <Form.Label>Receiver ID</Form.Label>
          <Form.Control onChange={(e) => setReceiverID(e.target.value)} id='ReceiverIDInput' value={ReceiverID} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Label>Message</Form.Label>
          <Form.Control onChange={(e) => setMessage(e.target.value)} id='MessageInput' value={Message} />
        </Col>
      </Row>

      <Row className="mb-3">
      <Col>
          <Form.Label>Date</Form.Label>
          <Form.Control onChange={(e) => setDate(e.target.value)} id='DateInput' value={Date} />
        </Col>

        <Col>
          <Form.Label>Time</Form.Label>
          <Form.Control onChange={(e) => setTime(e.target.value)} id='TimeInput' value={Time} />
        </Col>
      </Row>
      
      <Row className="mb-3">
      <Col>
          <Form.Label>Status</Form.Label>
          <Form.Control onChange={(e) => setDate(e.target.value)} id='DateInput' value={Date} />
        </Col>

      </Row>
      

      {/* <Row className="mb-3">
        <Col>
          <Form.Label>Nurse ID</Form.Label>
          <Form.Control  onChange={(e) => setNurseID(e.target.value)}id='nurseIDInput' value={nurseID}  />
        </Col>
        <Col>
          <Form.Label>Phone number</Form.Label>
          <Form.Control  onChange={(e) => setPhoneNumber(e.target.value)}id='phoneNumberInput' value={phoneNumber} />
        </Col>
      </Row> */}

      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}id='emailInput' value={email} />
        </Form.Group>

        <Col>
          <Form.Label>Nursing license Number</Form.Label>
          <Form.Control  onChange={(e) => setNursingLicenseNumber(e.target.value)}id='nursingLicenseNoInput' value={nursingLicenseNo}  />
        </Col>
      </Row> */}

      {/* <Row className="mb-3">
        <Col>
          <Form.Label>Specialization</Form.Label>
          <Form.Control onChange={(e) => setSpecilization(e.target.value)}id='specializationInput' value={specialization} />
        </Col>
        <Col>
          <Form.Label>Professional Experience</Form.Label>
          <Form.Control  onChange={(e) => setExperience(e.target.value)}id='professionalExperienceInput' value={professionalExperience}  />
        </Col>
      </Row> */}

      {/* <Form.Group className="mb-3" controlId="formGridAddress1">
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
      </Row> */}
      {/* <Row className="mb-3">
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


      </Row> */}

      {/* <Form.Group controlId="formFile" className="mb-3">
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
      </Row> */}
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

export default NotificationForm;