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


      const [NotificationID, setNotificationID] = useState("");
      const [Title, setTitle] = useState("");
      const [NotificationBody, setNotificationBody] = useState("");
      const [Reciever, setReciever] = useState("");

   
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
      NotificationID,
      Title,
      NotificationBody,
      Reciever,
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };
   
        axios.post("http://localhost:8070/notification/add", newNotification,config).then(() => {
        successfullyAdded();
        setNotificationID("");
        setTitle("");
        setNotificationBody("");
        setReciever("");

        
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
        
            setNotificationID(searchResult.NotificationID);
            setTitle(searchResult.Title);
            setNotificationBody(searchResult.NotificationBody);
            setReciever(searchResult.Reciever);

            document.getElementById('NotificationIDInput').value = searchResult.NotificationID;
            document.getElementById('TitleInput').value = searchResult.Title;
            document.getElementById('NotificationBodyInput').value = searchResult.NotificationBody;
            document.getElementById('RecieverInput').value = searchResult.Reciever;
            
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

    
         axios.get(`http://localhost:8070/notification/get/${NotificationID}`,config)

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
   
    axios.delete(`http://localhost:8070/notification/delete/${NotificationID}`,config)
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
    
         
            setNotificationID("");
            setTitle("");
            setNotificationBody("");
            setReciever("");

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
      NotificationID,
      Title,
      NotificationBody,
      Reciever,

          
    };

    axios.put(`http://localhost:8070/notification/update/${NotificationID}`, updatedNotification,config)
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
     
    setNotificationID("");
    setTitle("");
    setNotificationBody("");
    setReciever("");

  }
  return (
    <Form>
      <Row className="mb-3">
        <Col>
          <Form.Label>Notification ID</Form.Label>
          <Form.Control onChange={(e) => setNotificationID(e.target.value)} id='NotificationIDInput' value={NotificationID} />
        </Col>
        <Col>
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={(e) => setTitle(e.target.value)} id='TitleInput' value={Title} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Label>Notification</Form.Label>
          <Form.Control onChange={(e) => setNotificationBody(e.target.value)} id='NotificationBodyInput' value={NotificationBody} />
        </Col>
      </Row>

      <Row className="mb-3">
      <Col>
          <Form.Label>Receiver</Form.Label>
          <Form.Control onChange={(e) => setReciever(e.target.value)} id='ReceiverInput' value={Reciever} />
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

export default NotificationForm;