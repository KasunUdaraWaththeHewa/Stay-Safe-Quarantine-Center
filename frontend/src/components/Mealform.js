import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect,useContext } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

function MealForm() {
  const [mealID, setmealID] = useState("");
  const [mealName, setmealName] = useState("");
  const [mealDescription, setmealDescription] = useState("");
  const [nutritionalInformation, setnutritionalInformation] = useState("");
  const [dietaryRestrictions, setdietaryRestrictions] = useState("");
  const [mealType, setmealType] = useState("");
  const [portionSize, setportionSize] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const { user } = useContext(AuthContext);

  const successfullyAdded = () => {
    Swal.fire({
      title: 'You successfully Added a Meal!',
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
      title: 'You successfully Updated a Meal!',
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
      title: 'Are you sure to delete Meal?',
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
  //add Meal
  function sendData(e) {
    e.preventDefault();
    const newMeal = {
      mealID, mealName, mealDescription, nutritionalInformation, mealType, dietaryRestrictions, portionSize
    }
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    axios.post("http://localhost:8070/Meal/add", newMeal,config).then(() => {
      successfullyAdded();
      setmealID("")
      setmealName("")
      setmealDescription("")
      setnutritionalInformation("")
      setdietaryRestrictions("")
      setmealType("")
      setportionSize("Normal")
      window.location.reload();
    }).catch((err) => {
      Swal.fire(
        'Error!',
        'Error Adding Meal.',
        'error'
      )
    })
  }


  //search Meal

  function populateFormWithFetchedData() {
    if (searchResult) {
      setmealID(searchResult.user.mealID);
      setmealName(searchResult.user.mealName);
      setmealDescription(searchResult.user.mealDescription);
      setnutritionalInformation(searchResult.user.nutritionalInformation);
      setdietaryRestrictions(searchResult.user.dietaryRestrictions);
      setmealType(searchResult.user.mealType);
      setportionSize(searchResult.user.portionSize);

      document.getElementById("mealIDInput").value = mealID;
      document.getElementById("mealNameInput").value = mealName;
      document.getElementById("mealDescriptionInput").value = mealDescription;
      document.getElementById("nutritionalInformationInput").value = nutritionalInformation;
      document.getElementById("dietaryRestrictionsInput").value = dietaryRestrictions;
      document.getElementById("mealTypeInput").value = mealType;
      document.getElementById("portionSizeInput").value = portionSize;
      
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
    axios.get(`http://localhost:8070/Meal/get/${mealID}`,config)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          Swal.fire({
            title: 'You successfully found the Meal!',
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
            'Meal not found.',
            'error'
          )
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        Swal.fire(
          'Error!',
          'Error Searching Meal.',
          'error'
        )
      });
  }
  
  //delete Meal

  function handleDelete() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
    successfullyDeleted();
    axios.delete(`http://localhost:8070/Meal/delete/${mealID}`,config)
      .then((response) => {
        Swal.fire({
          title: 'You successfully Deleted the Meal!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        setmealID("");
        setmealName("");
        setmealDescription("");
        setnutritionalInformation("");
        setdietaryRestrictions("");
        setmealType("");
        setportionSize("Normal");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(
          'Deleted!',
          'Error Deleting Meal.',
          'error'
        )
      });
  }
//update Meal

function handleUpdate() {
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const updatedMeal = {
    mealID,
    mealName,
    mealDescription,
    nutritionalInformation,
    dietaryRestrictions,
    mealType,
    portionSize,
  };

  axios.put(`http://localhost:8070/Meal/update/${mealID}`, updatedMeal,config)
    .then((response) => {
      successfullyUpdated();
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      Swal.fire(
        'Did not Update!',
        'Error updating meal.',
        'error'
      )
    });
}

//clear form
function clearForm() {
  setmealID("");
  setmealName("");
  setmealDescription("");
  setnutritionalInformation("");
  setdietaryRestrictions("");
  setmealType("");
  setportionSize("");
}
  return (
    <Form>
        <Col>
          <Form.Label>Meal ID</Form.Label>
          <Form.Control id='mealIDInput' onChange={(e) => {
            setmealID(e.target.value)
          }}
          value={mealID} />
          <Form.Label>Meal Name</Form.Label>
          <Form.Control id='mealNameInput'onChange={(e) => {
            setmealName(e.target.value)
          }}
          value={mealName} />
          <Form.Label>Meal Description</Form.Label>
          <Form.Control id='mealDescriptionInput' onChange={(e) => {
            setmealDescription(e.target.value)
          }}
          value={mealDescription} />
          <Form.Label>Nutritional Information</Form.Label>
          <Form.Control id='nutritionalInformationInput' onChange={(e) => {
            setnutritionalInformation(e.target.value)
          }}
          value={nutritionalInformation} />
        </Col>
      <Form.Group className="mb-3" controlId="formGriddietaryRestrictions1">
        <Form.Label>Dietary Restrictions</Form.Label>
        <Form.Control id='dietaryRestrictionsInput' onChange={(e) => {
          setdietaryRestrictions(e.target.value)
        }}
        value={dietaryRestrictions} />
      </Form.Group>
       <Col>
          <Form.Label>Meal Type</Form.Label>
          <Form.Control id='mealTypeInput' onChange={(e) => {
            setmealType(e.target.value)
          }}
          value={mealType} />
        </Col>
        <Col >
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Portion Size</Form.Label>
            <Form.Select value={portionSize} id='portionSizeInput' onChange={(e) => setportionSize(e.target.value)}>
              <option value="Normal">Normal</option>
              <option value="Large">Large</option>
            </Form.Select>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Col>
      <br />

      <Button variant="success" onClick={sendData}>Enter</Button>{' '}
      <Button variant="secondary" onClick={handleSearch}>Search</Button>{' '}
      <Button variant="primary" onClick={handleUpdate}>Update</Button>{' '}
      <Button variant="danger" onClick={successfullyDeleted}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default MealForm;