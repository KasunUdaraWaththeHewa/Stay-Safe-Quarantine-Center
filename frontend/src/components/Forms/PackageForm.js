import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';

function PackageForm() {
  const [packageID, setpackageID] = useState("");
  const [packageName, setpackageName] = useState("");
  const [packageImage, setpackageImage] = useState("");
  const [details, setdetails] = useState("");
  const [detailList, setdetailList] = useState("");
  const [price, setprice] = useState("");

  const [searchResult, setSearchResult] = useState(null);
  //const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added a Package!',
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
      title: 'You successfully Updated a Package!',
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
      title: 'Are you sure to delete Package?',
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
    const newPackage = {
      packageID, packageName, packageImage, details, detailList, price
    }
    axios.post("http://localhost:8070/package/add", newPackage).then(() => {
      successfullyAdded();
      setpackageID("")
      setpackageName("")
      setpackageImage("")
      setdetails("")
      setdetailList("")
      setprice("")
      window.location.reload();
    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Packages.',
        'error'
      )
    })
  }

  //serach equipment
  function populateFormWithFetchedData() {
    if (searchResult) {
      setpackageID(searchResult.pkg.packageID);
      setpackageName(searchResult.pkg.packageName);
      setpackageImage(searchResult.pkg.packageImage);
      setdetails(searchResult.pkg.details);
      setdetailList(searchResult.pkg.detailList);
      setprice(searchResult.pkg.price);
    }
  }

  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/package/get/${packageID}`)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Package!',
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
            'Package not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Package.',
          'error'
        )
      });
  }
  // delete equipment
  function handleDelete() {
    successfullyDeleted();
    axios.delete(`http://localhost:8070/package/delete/${packageID}`)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Package!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setpackageID("")
        setpackageName("")
        setpackageImage("")
        setdetails("")
        setdetailList("")
        setprice("")
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Deleted!',
          'Error Deleting Package.',
          'error'
        )
      });
  }
  //update equipment details
  function handleUpdate() {
    const updatedpackage = {
      packageID,
      packageName,
      packageImage,
      details,
      detailList,
      price
    };

    axios.put(`http://localhost:8070/package/update/${packageID}`, updatedpackage)
      .then((response) => {
        successfullyUpdated();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Did not Update!',
          'Error updating Package.',
          'error'
        )
      });
  }

  //clear data
  function clearForm() {
    setpackageID("");
    setpackageName("");
    setpackageImage("");
    setdetails("");
    setdetailList("");
    setprice("");
  }

  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>Package ID</Form.Label>
          <Form.Control id='packageIDInput' onChange={(e) => setpackageID(e.target.value)} value={packageID} />
        </Col>
        <Col>
          <Form.Label>Package Name</Form.Label>
          <Form.Control id='packageNameInput' onChange={(e) => setpackageName(e.target.value)} value={packageName} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Package Image URL</Form.Label>
          <Form.Control id='packageImageInput' onChange={(e) => setpackageImage(e.target.value)} value={packageImage} />
        </Col>
        <Col>
          <Form.Label>Package Details</Form.Label>
          <Form.Control id='detailsInput' onChange={(e) => setdetails(e.target.value)} value={details} />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>Package Details List</Form.Label>
          <Form.Control id='detailsListInput' onChange={(e) => setdetailList(e.target.value)} value={detailList} />
        </Col>

        <Col>
          <Form.Label>Price</Form.Label>
          <Form.Control id='priceInput' onChange={(e) => setprice(e.target.value)} value={price} />
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

export default PackageForm;