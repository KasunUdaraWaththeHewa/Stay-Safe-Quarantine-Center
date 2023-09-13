import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../components/NavBar.js";
import "../components/NavBar.css";
import Footer from '../components/Footer.js';
import '../css file/Packages.css'

function PackageFetch() {
    const [packages, setPackages] = useState([]);
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

    useEffect(() => {
        // Fetch packages from the server when the component mounts
        axios.get('http://localhost:8070/package') // Replace with your server's API endpoint
            .then((response) => {
                setPackages(response.data);
            })
            .catch((error) => {
                console.error('Error fetching packages:', error);
            });
    }, []);

    return (
        <div className="packages">
            <div className="navbar_pkg">
                <NavBar />
            </div>
            <div className="imagepackagecontainer">
                <img src="https://img.freepik.com/premium-photo/happy-male-doctor-communicating-with-mature-patient-who-is-wheelchair-hallway-clinic_637285-690.jpg?w=1060" alt="" className="pkgimgbig" />
                <h1 className="txtpkgAboveImage">Packages</h1>
            </div>
            {/* ... Existing component code */}
            <Container fluid className="pkgDetails">
                <Row className="pkgrow">
                    {packages.map((packages) => (
                        <Col lg={4} className="pkgcol" key={packages.packageID}>
                            <Card style={{ width: '25rem' }} id={packages.packageID} className={`card ${isOtherCardHidden(`card${packages.packageID}`) ? 'hidden' : ''} `} border="light">
                                <Card.Img variant="top" src={packages.imageURL} />
                                <Card.Body>
                                    <Card.Title className="basictitlecard" ><b>{packages.packageName}</b></Card.Title>
                                    <Card.Text>
                                        {packages.details}
                                    </Card.Text>
                                    <Button className="btnpkg"
                                        onClick={() => handleButtonClick(`card${packages.packageID}`)}
                                        aria-controls={`example-collapse-text-card${packages.packageID}`}
                                        aria-expanded={isCardActive(`card${packages.packageID}`)} >
                                        {isCardActive(`card${packages.packageID}`) ? "Hide Details" : "Show Details"}
                                    </Button>
                                    <Collapse in={isCardActive(`card${packages.packageID}`)}>
                                        <div id={`example-collapse-text-card${packages.packageID}`} className="collapsetext">
                                            {/* Display package details here */}
                                            <div className="pricetag">Price : LKR {packages.price} per day</div>
                                        </div>
                                    </Collapse>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            {/* ... Rest of your component code */}
            <div className="footer_pkg">
                <Footer />
            </div>
        </div>
    );
}

export default PackageFetch;
