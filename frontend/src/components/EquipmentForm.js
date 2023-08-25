import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

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
  //add Equipment
  function sendData(e) {
    e.preventDefault();
    const newEquipment = {
      name, category, serialNumber, purchaseDate, manufacturer, supplier, location, price, currentStatus
    }
    axios.post("http://localhost:8070/equipment/add", newEquipment).then(() => {
      alert("Equipment added");
      setName("")
      setCategory("")
      setSerialNumber("")
      setPurchaseDate("")
      setManufacturer("")
      setSupplier("")
      setLocation("")
      setPrice("")
      setCurrentStatus("")
    }).catch((err) => {
      alert(err)
    })
  }

  //serach equipment
  function populateFormWithFetchedData() {
    if (searchResult) {
        setName(searchResult.equip.name);
<<<<<<< HEAD
        setCategory(searchResult.equip.category);
        setSerialNumber(searchResult.equip.serialNumber);
        setPurchaseDate(searchResult.equip.purchaseDate);
        setManufacturer(searchResult.equip.manufacturer);
        setSupplier(searchResult.equip.supplier);
        setLocation(searchResult.equip.location);
        setPrice(searchResult.equip.price);
        setCurrentStatus(searchResult.equip.currentStatus);
=======
        setCatergory(searchResult.user.catergory);
        setSerialNumber(searchResult.user.serialNumber);
        setPurchaseDate(searchResult.user.purchaseDate);
        setManufacturer(searchResult.user.manufacturer);
        setSupplier(searchResult.user.supplier);
        setLocation(searchResult.user.location);
        setPrice(searchResult.user.price);
        setCurrentStatus(searchResult.user.currentStatus);

      document.getElementById("nameInput").value = name;
      document.getElementById("catergoryInput").value = catergory;
      document.getElementById("serialNumberInput").value = serialNumber;
      document.getElementById("purchaseDateInput").value = purchaseDate;
      document.getElementById("manufacturerInput").value = manufacturer;
      document.getElementById("supplierInput").value = supplier;
      document.getElementById("locationInput").value = location;
      document.getElementById("priceInput").value = price;
      document.getElementById("currentStatusInput").value = currentStatus;
>>>>>>> d6905302251d970d679ec443f63563694e22ab25

      alert("Populated form");
    }
  }

  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/equipment/get/${serialNumber}`)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          alert("Equipment found");
          console.log(response.data);
          populateFormWithFetchedData();
        } else {
          alert("Equipment not found");
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        alert("Error searching for Equipment");
      });
  }
  // delete equipment
  function handleDelete() {
    axios.delete(`http://localhost:8070/equipment/delete/${serialNumber}`)
      .then((response) => {
        alert("Equipment deleted successfully");
        setName("")
        setCategory("")
        setSerialNumber("")
        setPurchaseDate("")
        setManufacturer("")
        setSupplier("")
        setLocation("")
        setPrice("")
        setCurrentStatus("")
      })
      .catch((error) => {
        console.error(error);
        alert("Error deleting equipment");
      });
  }
  //update equipment details
  function handleUpdate() {
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

    axios.put(`http://localhost:8070/equipment/update/${serialNumber}`, updatedequipment)
      .then((response) => {
        alert("Equipment updated successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating equipment");
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

    alert("Cleared form");
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
      <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default EquipmentForm;