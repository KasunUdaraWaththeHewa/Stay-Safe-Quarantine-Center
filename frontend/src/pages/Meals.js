import NavBar from "../components/NavBar";
import React from 'react';
import '../css file/Meals.css';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import img_m from '../img/meals.jpg';
import Row from 'react-bootstrap/Row';
function Meals(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div>
                <div className="M_page_Container" >
                    <div classname="M_image">
                    <img src={img_m} alt="meal"></img>
                    </div>
                    <div className="form_C">
                        <Form>
                            <Col className="meals">
                                <Form.Label>Meal ID</Form.Label>
                                <Form.Control placeholder="ID" />
                                <Form.Label>Meal Name</Form.Label>
                                <Form.Control placeholder="Name" />
                                <Form.Label>MealDescription</Form.Label>
                                <Form.Control as="textarea" rows={3}  placeholder="Description" />
                                <Form.Label>Nutritional Information</Form.Label>
                                <Form.Control as="textarea" rows={3}  placeholder="Information" />
                                <Form.Label>Dietary Restriction</Form.Label>
                                <Form.Control as="textarea" rows={3}  placeholder="Restriction" />
                                <Form.Label>Meal Type</Form.Label>
                                <Form.Control placeholder="Type" />
                                <Form.Label>Portion Size</Form.Label>
                                <Form.Control placeholder="Size" />
                            </Col>
                        </Form>
                    </div>
                </div>       
            <div><Footer /></div>
        </div>
    );

}
export default Meals;