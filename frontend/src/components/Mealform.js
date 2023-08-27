import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function MealForm() {
  const [mealID, setmealID] = useState("");
  const [mealName, setmealName] = useState("");
  const [mealDescription, setmealDescription] = useState("");
  const [nutritionalInformation, setnutritionalInformation] = useState("");
  const [dietaryRestrictions, setdietaryRestrictions] = useState("");
  const [mealType, setmealType] = useState("");
  const [portionSize, setportionSize] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  //add Meal
  function sendData(e) {
    e.preventDefault();
    const newMeal = {
      mealID, mealName, mealDescription, nutritionalInformation, mealType, dietaryRestrictions, portionSize
    }
    axios.post("http://localhost:8070/Meal/add", newMeal).then(() => {
      alert("Meal added");
      setmealID("")
      setmealName("")
      setmealDescription("")
      setnutritionalInformation("")
      setdietaryRestrictions("")
      setmealType("")
      setportionSize("Normal")
      window.location.reload();
    }).catch((err) => {
      alert(err)
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
      

      alert("Populated form");
    }
  }

  useEffect(() => {
    populateFormWithFetchedData();
  }, [searchResult]);

  function handleSearch() {
    axios.get(`http://localhost:8070/Meal/get/${mealID}`)
      .then((response) => {
        setSearchResult(response.data);
        if (response.data) {
          alert("Meal found");
          console.log(response.data);
          populateFormWithFetchedData(response.data);
        } else {
          alert("Meal not found");
        }
      })
      .catch((error) => {
        console.error(error);
        setSearchResult(null);
        alert("Error searching for Meal");
      });
  }
  
  //delete Meal

  function handleDelete() {
    axios.delete(`http://localhost:8070/Meal/delete/${mealID}`)
      .then((response) => {
        alert("Meal deleted successfully");
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
        alert("Error deleting Meal member");
      });
  }
//update Meal

function handleUpdate() {
  const updatedMeal = {
    mealID,
    mealName,
    mealDescription,
    nutritionalInformation,
    dietaryRestrictions,
    mealType,
    portionSize,
  };

  axios.put(`http://localhost:8070/Meal/update/${mealID}`, updatedMeal)
    .then((response) => {
      alert("Meal updated successfully");
      window.location.reload();
    })
    .catch((error) => {
      console.error(error);
      alert("Error updating Meal");
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
  alert("Cleared form");
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
      <Button variant="danger" onClick={handleDelete}>Delete</Button>{' '}
      <Button variant="success" onClick={clearForm}>Clear</Button>{' '}

    </Form>
  );
}

export default MealForm;