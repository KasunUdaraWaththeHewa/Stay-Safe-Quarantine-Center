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
        if (activeCard === cardId) {
            setActiveCard(null); // Collapse the card if it's already active

        } else {
            setActiveCard(cardId);

        }
    };

    const isCardActive = (cardId) => activeCard === cardId;
    const isOtherCardHidden = (cardId) => activeCard !== null && !isCardActive(cardId);

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
                        <Card style={{ width: '25rem' }} id="basicpkg" className={`card ${isOtherCardHidden('card1') ? 'hidden' : ''} `} border="light">
                            <Card.Img variant="top" src={BasicPackage} />
                            <Card.Body>
                                <Card.Title className="basictitlecard" ><b>Basic Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Stay comfortably in our well-appointed rooms, enjoy three delicious meals a day while our medical staff ensures your well-being with regular health check-ups.
                                </Card.Text>
                                <Button className="btnpkg"
                                    onClick={() => 
                                        handleButtonClick('card1')
                                    }
                                    aria-controls={`example-collapse-text-card1`}
                                    aria-expanded={isCardActive('card1')} >
                                    {isCardActive('card1') ? "Hide Details" : "Show Details"}
                                </Button>
                                <Collapse in={isCardActive('card1')}>
                                    <div id={`example-collapse-text-card1`} className="collapsetext">
                                    <br/>1.Accommodation in a comfortable room.<br/>
                                    2.Three meals a day with dietary considerations.<br/>
                                    3.Regular health check-ups by medical staff.<br/>
                                    4.Access to basic amenities and facilities.<br/>
                                    <div className="pricetag">Price : LKR 7000 per day</div>

                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="pkgcol">
                        <Card style={{ width: '25rem' }} border="light" id="familypkg" className={`card ${isOtherCardHidden('card2') ? 'hidden' : ''}`} >
                            <Card.Img variant="top" src={FamilyPackage} />
                            <Card.Body>
                                <Card.Title className="familytitlecard"><b>Family Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Our family-friendly accommodations provide dedicated family units, meals for all members, regular health check-ups, and a range of indoor and outdoor activities to enjoy.
                                </Card.Text>
                                <Button className="btnpkg"
                                    onClick={() => handleButtonClick('card2')}
                                    aria-controls={`example-collapse-text-card2`}
                                    aria-expanded={isCardActive('card2')} >
                                    {isCardActive('card2') ? "Hide Details" : "Show Details"}
                                </Button>
                                <Collapse in={isCardActive('card2')}>
                                    <div id={`example-collapse-text-card2`} className="collapsetext">
                                    <br/>1.Interconnected rooms or dedicated family units..<br/>
                                    2.Customized meals for dietary needs.<br/>
                                    3.Regular health check-ups for all.<br/>
                                    4.Indoor and outdoor activities for all ages.<br/>
                                    5.Access to family-friendly amenities.<br/>
                                    <div className="pricetag">Price : LKR 15000 per day</div>

                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="pkgcol">
                        <Card style={{ width: '25rem' }} border="light" id="longpkg" className={`card ${isOtherCardHidden('card3') ? 'hidden' : ''}`} >
                            <Card.Img variant="top" src={LongTermPackage} />
                            <Card.Body>
                                <Card.Title className="longtitlecard"><b>Long Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Our long term package offers extended stay accommodations, nutritious meals tailored for longer stays and engaging activities to combat isolation.
                                </Card.Text>
                                <Button className="btnpkg"
                                    onClick={() => handleButtonClick('card3')}
                                    aria-controls={`example-collapse-text-card3`}
                                    aria-expanded={isCardActive('card3')} >
                                    {isCardActive('card3') ? "Hide Details" : "Show Details"}
                                </Button>
                                <Collapse in={isCardActive('card3')}>
                                    <div id={`example-collapse-text-card3`} className="collapsetext">
                                    <br/>1.Extended stay accommodation for prolonged quarantines.<br/>
                                    2.Nutritious meals tailored for extended stays.<br/>
                                    3.Regular health check-ups and extended medical support.<br/>
                                    4.Engaging activities and programs to combat isolation.<br/>
                                    5.Access to a dedicated support team for assistance.<br/>
                                    <div className="pricetag">Price : LKR 8000 per day</div>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row className="pkgrow">
                    <Col lg={6} className="pkgcol">
                        <Card style={{ width: '27rem' }} border="light" id="enhancedpkg" className={`card ${isOtherCardHidden('card4') ? 'hidden' : ''}`} >
                            <Card.Img variant="top" src={EnhancedPackage} />
                            <Card.Body>
                                <Card.Title className="enhancedtitlecard"><b>Enhanced Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Elevate your quarantine experience with upgraded accommodations, a variety of dietary options, daily health monitoring, access to recreational activities, and complimentary Wi-Fi and entertainment.
                                </Card.Text>
                                <Button className="btnpkg"
                                    onClick={() => handleButtonClick('card4')}
                                    aria-controls={`example-collapse-text-card4`}
                                    aria-expanded={isCardActive('card4')} >
                                    {isCardActive('card4') ? "Hide Details" : "Show Details"}
                                </Button>
                                <Collapse in={isCardActive('card4')}>
                                    <div id={`example-collapse-text-card4`} className="collapsetext">
                                    <br/>1.Upgraded accommodation with added amenities.<br/>
                                    2.Choice of special dietary options for three daily meals.<br/>
                                    3.Daily health monitoring by dedicated medical staff.<br/>
                                    4.Access to recreational activities and wellness programs.<br/>
                                    5.Complimentary Wi-Fi and entertainment.<br/>
                                    <div className="pricetag">Price : LKR 10000 per day</div>
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} className="pkgcol">
                        <Card style={{ width: '27rem' }} border="light" id="vippkg" className={`card ${isOtherCardHidden('card5') ? 'hidden' : 'active'}`} >
                            <Card.Img variant="top" src={VIPPackage} />
                            <Card.Body>
                                <Card.Title className="viptitlecard"><b>VIP Quarantine Package</b></Card.Title>
                                <Card.Text>
                                    Indulge in luxurious accommodations, personalized gourmet meals, round-the-clock medical staff, specialized wellness services, and concierge assistance to ensure a VIP experience throughout your stay.
                                </Card.Text>
                                <Button className="btnpkg"
                                    onClick={() => handleButtonClick('card5')}
                                    aria-controls={`example-collapse-text-card5`}
                                    aria-expanded={isCardActive('card5')} >
                                    {isCardActive('card5') ? "Hide Details" : "Show Details"}
                                </Button>
                                <Collapse in={isCardActive('card5')}>
                                    <div id={`example-collapse-text-card5`} className="collapsetext">
                                    <br/>1.Luxurious accommodations with premium amenities.<br/>
                                    2.Personalized gourmet meals.<br/>
                                    3.24/7 dedicated medical staff and priority health monitoring.<br/>
                                    4.Exclusive access to specialized wellness services.<br/>
                                    5.Concierge services and personalized assistance.<br/>
                                    <div className="pricetag">Price : LKR 20000 per day</div>
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
