import NavBar from "../components/NavBar";
import React from 'react';
import '../css file/ContactUs.css';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactUs(){
    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div> 
            <div className="imgContactUs">
                <h1 className="txtContactUsAboveImage">Contact Us</h1>
                <img src="https://zemhive.com/wp-content/uploads/2020/08/Hospital-Management-System.jpg" alt="Contact Us" className="ContactUsImg" />    
            </div>           
            <div className="divH1ContactUs">
                <div className="contactUsContainer">
                        
                </div>
                <div className="mapSection">
                    <div className="leftMapSection">
                        <div className="map">
                            <img src="http://www.caingram.com/Sri_lanka/Colombo/Colombo_map.jpg" alt="" className="mapImg" />
                        </div>
                    </div>
                    <div className="rightMapSection">
                        <div className="contactDetails" >
                            <div className="contactItem" >
                                <h4 className="h2ContactNumber" >Phone Number</h4>
                                <h4 className="h2Detail" >011-1234567</h4>
                            </div>
                            <div className="contactItem">
                                <h4 className="h2Email">Email</h4>
                                <h4 className="h2Detail">Samantha123@gmail.com</h4>
                            </div>
                            <div className="contactItem">
                                <h4 className="h2Address" >Address</h4>
                                <p><b>College House
                                    94, Cumaratunga Munidasa Mw,
                                    Colombo 03,
                                    Sri Lanka</b></p>
                            </div>
                            <div className="socialSection">
                                <div className="socialIcon" id="facebookDiv" ><img className="facebookLogo" src="https://www.pngkey.com/png/full/767-7674910_black-and-white-facebook-logo-png.png" alt="Facebook" /></div>
                                <div className="socialIcon" id="twitterDiv" ><img className="TwitterLogo" src="https://clipartcraft.com/images/white-twitter-logo-icon-8.png" alt="Twwitter" /></div>
                                <div className="socialIcon" id="instaDiv" ><img className="InstagramLogo" src="https://600cranes.com.au/wp-content/uploads/2017/05/insta-white-768x767.png" alt="Instagram" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divSuggestions">
                <div className="suggestionsContainer" >
                    <div className="formContainor">
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Nationality</Form.Label>
                                <Form.Control placeholder="Nationality" />
                                </Col>
                                <Col>
                                    <Form.Label>Phone number</Form.Label>
                                <Form.Control placeholder="Phone number" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Col>
                                    <Form.Label>Age</Form.Label>
                                <Form.Control placeholder="Age" />
                                </Col>
                            </Row>
                            
                            <br />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3}  placeholder="Message" />
                            </Form.Group>
                            <br />
                            <br />
                            <Button variant="primary">Submit</Button>{' '}
                        </Form>
                    </div>
                </div>       
            </div>
            <div className="whitespace">
                
            </div>
            <div><Footer /></div>
            
        </div>
    );

}
export default ContactUs;