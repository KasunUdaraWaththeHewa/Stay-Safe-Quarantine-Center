import React from "react";
import NavBar from "../components/NavBar.js";
import "../components/NavBar.css";
import Footer from '../components/Footer.js';
import '../css file/Packages.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import BasicPackage from '../img/BasicPackage.png'
import EnhancedPackage from '../img/EnhancedPackage.png'
import FamilyPackage from '../img/FamilyPackage.png'
import VIPPackage from '../img/VIPPackage.png'
import LongTermPackage from '../img/LongTermPackage.png'

const Packages = () => {
    return ( 
        <div className="packages">
            <div className="navbar_pkg">
                <NavBar/>
            </div>
            <div className="imagepackagecontainer">
                <img src="https://img.freepik.com/premium-photo/happy-male-doctor-communicating-with-mature-patient-who-is-wheelchair-hallway-clinic_637285-690.jpg?w=1060" alt="" className="pkgimgbig" />
                <h1 className="txtpkgAboveImage">Packages</h1>
            </div>
            <Container fluid className = "pkgDetails">
                <Row className = "pkgrow">
                    <Col lg = {4} className = "pkgcol">
                    <Card style={{ width: '25rem' }} className="basicpkg" border="light" data-aos="flip-left" data-aos-duration="1500">
                        <Card.Img variant="top" src = {BasicPackage} />
                        <Card.Body>
                            <Card.Title className="basictitlecard" ><b>Basic Quarantine Package</b></Card.Title>
                            <Card.Text>
                                Stay comfortably in our well-appointed rooms, enjoy three delicious meals a day while our medical staff ensures your well-being with regular health check-ups.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg = {4} className = "pkgcol">
                    <Card style={{ width: '25rem' }} border="light" className="familypkg" data-aos="flip-left" data-aos-duration="1500">
                        <Card.Img variant="top" src = {FamilyPackage} />
                        <Card.Body>
                            <Card.Title className="familytitlecard"><b>Family Quarantine Package</b></Card.Title>
                            <Card.Text>
                                Our family-friendly accommodations provide dedicated family units, meals for all members, regular health check-ups, and a range of indoor and outdoor activities to enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg = {4} className = "pkgcol">
                    <Card style={{ width: '25rem' }} border="light" className="longtermpkg" data-aos="flip-left" data-aos-duration="1500">
                        <Card.Img variant="top" src = {LongTermPackage} />
                        <Card.Body>
                            <Card.Title className="longtitlecard"><b>Long Quarantine Package</b></Card.Title>
                            <Card.Text>
                                Our long term package offers extended stay accommodations, nutritious meals tailored for longer stays and engaging activities to combat isolation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
                <Row className = "pkgrow">
                    <Col lg = {6} className = "pkgcol">
                    <Card style={{ width: '25rem' }} border="light" className="enhancedpkg" data-aos="flip-left" data-aos-duration="1500">
                        <Card.Img variant="top" src = {EnhancedPackage} />
                        <Card.Body>
                            <Card.Title className="enhancedtitlecard"><b>Enhanced Quarantine Package</b></Card.Title>
                            <Card.Text>
                                Elevate your quarantine experience with upgraded accommodations, a variety of dietary options, daily health monitoring, access to recreational activities, and complimentary Wi-Fi and entertainment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg = {6} className = "pkgcol">
                    <Card style={{ width: '25rem' }} border="light" className="vippkg" data-aos="flip-left" data-aos-duration="1500">
                        <Card.Img variant="top" src = {VIPPackage} />
                        <Card.Body>
                            <Card.Title className="viptitlecard"><b>VIP Quarantine Package</b></Card.Title>
                            <Card.Text>
                                Indulge in luxurious accommodations, personalized gourmet meals, round-the-clock medical staff, specialized wellness services, and concierge assistance to ensure a VIP experience throughout your stay.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            <div className="footer_pkg">
                <Footer/>
            </div>
        </div>
     );
}
 
export default Packages;