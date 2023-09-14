import NavBar from "../components/NavBar";
import '../css file/ContactUs.css';
import Footer from '../components/Footer';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function ContactUs(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o7yl848', 'template_o0gw9up', form.current, 'cs5MnhTb6KsZCcpPP')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Message Sent Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div>
            <div className="navBarContainor" ><NavBar /></div> 
            <div className="imgContactUs">
                <h1 className="txtContactUsAboveImage">Contact Us</h1>
                <img src="https://img.freepik.com/premium-photo/business-people-with-headsets-smiling-camera_13339-300111.jpg?w=996" alt="Contact Us" className="ContactUsImg" />    
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
                                <h4 className="h2Detail" >011-2985674</h4>
                            </div>
                            <div className="contactItem">
                                <h4 className="h2Email">Email</h4>
                                <h4 className="h2Detail2">staysafequarantinecenter@gmail.com</h4>
                            </div>
                            <div className="contactItem">
                                <h4 className="h2Address" >Address</h4>
                                <p><b>Stay Safe Quarantine Center,
                                    94, Bambalapitiya,
                                    Colombo 07,
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
                        <Form  ref={form} onSubmit={sendEmail}>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>First name</Form.Label>
                                <Form.Control placeholder="First name"  name="firstname" />
                                </Col>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                <Form.Control placeholder="Last name"  name="lastname"/>
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Col>
                                    <Form.Label>Nationality</Form.Label>
                                <Form.Control placeholder="Nationality" name="nationality" />
                                </Col>
                                <Col>
                                    <Form.Label>Phone number</Form.Label>
                                <Form.Control placeholder="Phone number" name="phonenumber" />
                                </Col>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" name="Email"/>
                                </Form.Group>

                                <Col>
                                    <Form.Label>Age</Form.Label>
                                <Form.Control placeholder="Age" name="Age"/>
                                </Col>
                            </Row>
                            
                            <br />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3}  placeholder="Message" name="message" />
                            </Form.Group>
                            <br />
                            <br />
                            <input className="btnSubmit" type="submit" value="Send" />

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