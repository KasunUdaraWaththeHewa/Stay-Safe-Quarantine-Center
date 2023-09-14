import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

function ServiceForm() {
  const [serviceID, setServiceID] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [serviceDetails, setServiceDetails] = useState("");

  const [searchResult, setSearchResult] = useState(null);
  //const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added a Service!',
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
      title: 'You successfully Updated a Service!',
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
      title: 'Are you sure to delete Service?',
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
  //add Equipment
  function sendData(e) {
    e.preventDefault();
    const newService = {
      serviceID,serviceName,serviceImage,serviceDetails
    }
    axios.post("http://localhost:8070/service/add", newService).then(() => {
      successfullyAdded();
      setServiceID("")
      setServiceName("")
      setServiceImage("")
      setServiceDetails("")
      window.location.reload();
    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Services.',
        'error'
      )
    })
  }

  //serach equipment
  function populateFormWithFetchedData() {
    if (searchResult) {
      setServiceID(searchResult.ser.serviceID);
      setServiceName(searchResult.ser.serviceName);
      setServiceImage(searchResult.ser.serviceImage);
      setServiceDetails(searchResult.ser.serviceDetails);
    }
  }
  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/service/get/${serviceID}`)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Service!',
            icon: 'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          populateFormWithFetchedData();
        } else {
          Swal.fire(
            'Error!',
            'Service not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Service.',
          'error'
        )
      });
  }
  // delete equipment
  function handleDelete() {
    successfullyDeleted();
    axios.delete(`http://localhost:8070/service/delete/${serviceID}`)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Service!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setServiceID("")
        setServiceName("")
        setServiceName("")
        setServiceImage("")
        setServiceDetails("")
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Deleted!',
          'Error Deleting Service.',
          'error'
        )
      });
  }
  //update equipment details
  function handleUpdate() {
    const updatedService = {
      serviceID,
      serviceName,
      serviceImage,
      serviceDetails
    };

    axios.put(`http://localhost:8070/service/update/${serviceID}`, updatedService)
      .then((response) => {
        successfullyUpdated();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Did not Update!',
          'Error updating Service.',
          'error'
        )
      });
  }

  function clearForm() {
    setServiceID("");
    setServiceName("");
    setServiceImage("");
    setServiceDetails("");
  }

  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>Service ID</Form.Label>
          <Form.Control id='serviceIDInput' onChange={(e) => setServiceID(e.target.value)} value={serviceID} />
        </Col>
        <Col>
          <Form.Label>Service Name</Form.Label>
          <Form.Control id='serviceNameInput' onChange={(e) => setServiceName(e.target.value)} value={serviceName} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Service Image URL</Form.Label>
          <Form.Control id='serviceImageInput' onChange={(e) => setServiceImage(e.target.value)} value={serviceImage} />
        </Col>
        <Col>
          <Form.Label>Service Details</Form.Label>
          <Form.Control id='serviceDetailsInput' onChange={(e) => setServiceDetails(e.target.value)} value={serviceDetails} />
        </Col>
      </Row>
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

export default ServiceForm;