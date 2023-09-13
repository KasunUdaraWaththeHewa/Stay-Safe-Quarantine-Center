import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect,useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

function EquipmentForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [supplier, setSupplier] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");

  const [searchResult, setSearchResult] = useState(null);
  const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added an Equipment!',
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
      title: 'You successfully Updated an Equipment!',
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
      title: 'Are you sure to delete Equipment?',
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
    const newEquipment = {
      name, category, serialNumber, purchaseDate, manufacturer, supplier, location, price, currentStatus
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    axios.post("http://localhost:8070/equipment/add", newEquipment,config).then(() => {
      successfullyAdded();
      setName("")
      setCategory("")
      setSerialNumber("")
      setPurchaseDate("")
      setManufacturer("")
      setSupplier("")
      setLocation("")
      setPrice("")
      setCurrentStatus("")
      window.location.reload();
    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Equipment.',
        'error'
      )
    })
  }

  //serach equipment
  function populateFormWithFetchedData() {
    if (searchResult) {
        setName(searchResult.equip.name);
        setCategory(searchResult.equip.category);
        setSerialNumber(searchResult.equip.serialNumber);
        setPurchaseDate(searchResult.equip.purchaseDate);
        setManufacturer(searchResult.equip.manufacturer);
        setSupplier(searchResult.equip.supplier);
        setLocation(searchResult.equip.location);
        setPrice(searchResult.equip.price);
        setCurrentStatus(searchResult.equip.currentStatus);
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
    axios.get(`http://localhost:8070/equipment/get/${serialNumber}`,config)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Equipment!',
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
            'Equipment not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Equipment.',
          'error'
        )
      });
  }
  // delete equipment
  function handleDelete() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    axios.delete(`http://localhost:8070/equipment/delete/${serialNumber}`,config)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Equipment!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setName("")
        setCategory("")
        setSerialNumber("")
        setPurchaseDate("")
        setManufacturer("")
        setSupplier("")
        setLocation("")
        setPrice("")
        setCurrentStatus("")
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Not Deleted!',
          'Error Deleting Equipment.',
          'error'
        )
      });
  }
  //update equipment details
  function handleUpdate() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    const updatedequipment = {
      name,
      category,
      serialNumber,
      purchaseDate,
      manufacturer,
      supplier,
      location,
      price,
      currentStatus,
    };
    
    axios.put(`http://localhost:8070/equipment/update/${serialNumber}`, updatedequipment,config)
      .then((response) => {
        successfullyUpdated();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Did not Update!',
          'Error updating Equipment.',
          'error'
        )
      });
  }

  //clear data
  function clearForm() {
    setName("");
    setCategory("");
    setSerialNumber("")
    setPurchaseDate("");
    setManufacturer("");
    setSupplier("");
    setLocation("");
    setPrice("");
    setCurrentStatus("");
  }

  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>Name</Form.Label>
          <Form.Control id='nameInput' onChange={(e) => setName(e.target.value)}  value={name} />
        </Col>
        <Col>
          <Form.Label>Catergory</Form.Label>
          <Form.Control id='categoryInput'  onChange={(e) => setCategory(e.target.value)}  value={category} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Serial Number</Form.Label>
          <Form.Control id='serialNumberInput' onChange={(e) => setSerialNumber(e.target.value)}  value={serialNumber} />
        </Col>
        <Col>
            <Form.Label>Purchased Date</Form.Label>
            <Form.Control
                type="date"
                name="purchaseDate"
                id='purchaseDateInput'
                value={purchaseDate}
                onChange={(e) => setPurchaseDate(e.target.value)}
            />
        </Col>
      </Row>

      <Row className="mb-3">
      <Col>
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control id='manufacturerInput' onChange={(e) => setManufacturer(e.target.value)}  value={manufacturer} />
        </Col>

        <Col>
          <Form.Label>Supplier</Form.Label>
          <Form.Control id='supplierInput' onChange={(e) => setSupplier(e.target.value)}  value={supplier} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Location</Form.Label>
          <Form.Control id='locationInput' onChange={(e) => setLocation(e.target.value)} value={location}  />
        </Col>
        <Col>
          <Form.Label>Price</Form.Label>
          <Form.Control id='priceInput' onChange={(e) => setPrice(e.target.value)} value={price}  />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Current Status</Form.Label>

            <Form.Select value={currentStatus}id='currentStatusInput' onChange={(e) => setCurrentStatus(e.target.value)}>
              <option value="" disabled>Select status</option>
              <option value="New">New</option>
              <option value="Old">Old</option>
              <option value="Renewed">Renewed</option>
              <option value="Broken">Broken</option>
            </Form.Select>
          </Form.Group>
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

export default EquipmentForm;