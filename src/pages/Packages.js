import React from "react";
import NavBar from "../components/NavBar.js";
import "../components/NavBar.css";
import Footer from '../components/Footer.js';
import '../css file/Packages.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import BasicPackage from '../img/BasicPackage.png'
import EnhancedPackage from '../img/EnhancedPackage.png'
import FamilyPackage from '../img/FamilyPackage.png'
import VIPPackage from '../img/VIPPackage.png'
import LongTermPackage from '../img/LongTermPackage.png'

const Packages = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleButtonClick = (cardId) => {
      setActiveCard(cardId);
    };
  
    const isCardActive = (cardId) => activeCard === cardId;
    const isOtherCardHidden = (cardId) => activeCard !== null && activeCard !== cardId;
    return (
        <div className="packages">
            <div className="navbar_pkg">
                <NavBar />
            </div>
            <div className="imagepackagecontainer">
                <img src="https://img.freepik.com/premium-photo/happy-male-doctor-communicating-with-mature-patient-who-is-wheelchair-hallway-clinic_637285-690.jpg?w=1060" alt="" className="pkgimgbig" />
                <h1 className="txtpkgAboveImage">Packages</h1>
            </div>
            <Container fluid className="pkgDetails">
                <Row className="pkgrow">
                    <Col lg={4} className="pkgcol">
                        <Card style={{ width: '25rem' }}  id = "basicpkg" className={`card ${isOtherCardHidden('card1') ? 'hidden' : ''} `} border="light" data-aos="zoom-in" data-aos-duration="1000" >
                            <Card.Img variant="top" src={BasicPackage} />
                            <Card.Body>
                                <Card.Title className="basictitlecard" ><b>Basic Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Stay comfortably in our well-appointed rooms, enjoy three delicious meals a day while our medical staff ensures your well-being with regular health check-ups.
                                </Card.Text>
                                <Button className="basicbtn"
                                    onClick={() => handleButtonClick('card1')}            
                                    aria-controls={`example-collapse-text-card1`}
                                    aria-expanded={isCardActive('card1')} >
                                    Details
                                </Button>
                                <Collapse in={isCardActive('card1')}>
                                    <div id={`example-collapse-text-card1`}>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="pkgcol">
                        <Card style={{ width: '25rem' }} border="light" id = "familypkg" className={`card ${isOtherCardHidden('card2') ? 'hidden' : 'active'}`} data-aos="zoom-in" data-aos-duration="1000">
                            <Card.Img variant="top" src={FamilyPackage} />
                            <Card.Body>
                                <Card.Title className="familytitlecard"><b>Family Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Our family-friendly accommodations provide dedicated family units, meals for all members, regular health check-ups, and a range of indoor and outdoor activities to enjoy.
                                </Card.Text>
                                <Button className="familybtn"
                                    onClick={() => handleButtonClick('card2')}             
                                    aria-controls={`example-collapse-text-card2`}
                                    aria-expanded={isCardActive('card2')} >
                                    Details
                                </Button>
                                <Collapse in={isCardActive('card2')}>
                                    <div id={`example-collapse-text-card2`}>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="pkgcol">
                        <Card style={{ width: '25rem' }} border="light" id = "longpkg" className={`card ${isOtherCardHidden('card3') ? 'hidden' : 'active'}`} data-aos="zoom-in" data-aos-duration="1000">
                            <Card.Img variant="top" src={LongTermPackage} />
                            <Card.Body>
                                <Card.Title className="longtitlecard"><b>Long Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Our long term package offers extended stay accommodations, nutritious meals tailored for longer stays and engaging activities to combat isolation.
                                </Card.Text>
                                <Button className="longbtn"
                                    onClick={() => handleButtonClick('card3')}             
                                    aria-controls={`example-collapse-text-card3`}
                                    aria-expanded={isCardActive('card3')} >
                                    Details
                                </Button>
                                <Collapse in={isCardActive('card3')}>
                                    <div id={`example-collapse-text-card3`}>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row className="pkgrow">
                    <Col lg={6} className="pkgcol">
                        <Card style={{ width: '25rem' }} border="light" id = "enhancedpkg" className={`card ${isOtherCardHidden('card4') ? 'hidden' : 'active'}`} data-aos="zoom-in" data-aos-duration="1000">
                            <Card.Img variant="top" src={EnhancedPackage} />
                            <Card.Body>
                                <Card.Title className="enhancedtitlecard"><b>Enhanced Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Elevate your quarantine experience with upgraded accommodations, a variety of dietary options, daily health monitoring, access to recreational activities, and complimentary Wi-Fi and entertainment.
                                </Card.Text>
                                <Button className="enhancebtn"
                                    onClick={() => handleButtonClick('card4')}             
                                    aria-controls={`example-collapse-text-card4`}
                                    aria-expanded={isCardActive('card4')} >
                                    Details
                                </Button>
                                <Collapse in={isCardActive('card4')}>
                                    <div id={`example-collapse-text-card4`}>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} className="pkgcol">
                        <Card style={{ width: '25rem' }} border="light" id = "vippkg" className={`card ${isOtherCardHidden('card5') ? 'hidden' : 'active'}`} data-aos="zoom-in" data-aos-duration="1000">
                            <Card.Img variant="top" src={VIPPackage} />
                            <Card.Body>
                                <Card.Title className="viptitlecard"><b>VIP Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Indulge in luxurious accommodations, personalized gourmet meals, round-the-clock medical staff, specialized wellness services, and concierge assistance to ensure a VIP experience throughout your stay.
                                </Card.Text>
                                <Button className="vipbtn"
                                    onClick={() => handleButtonClick('card5')}             
                                    aria-controls={`example-collapse-text-card5`}
                                    aria-expanded={isCardActive('card5')} >
                                    Details
                                </Button>
                                <Collapse in={isCardActive('card5')}>
                                    <div id={`example-collapse-text-card5`}>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                        labore wes anderson cred nesciunt sapiente ea proident.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="footer_pkg">
                <Footer />
            </div>
        </div >
    );
}

export default Packages;