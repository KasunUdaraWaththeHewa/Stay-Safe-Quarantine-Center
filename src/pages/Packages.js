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
            <Container fluid className = "pkgDetails">
                <Row className = "pkgrow">
                    <Col lg = {4} className = "pkgcol">
                    <Card style={{ width: '18rem' }} className="basicpkg" border="light">
                        <Card.Img variant="top" src = {BasicPackage} />
                        <Card.Body>
                            <Card.Title>Basic Quaratntine Package</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg = {4} className = "pkgcol">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src = {FamilyPackage} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg = {4} className = "pkgcol">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src = {LongTermPackage} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
                <Row className = "pkgrow">
                    <Col lg = {6} className = "pkgcol">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src = {EnhancedPackage} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col lg = {6} className = "pkgcol">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src = {VIPPackage} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
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