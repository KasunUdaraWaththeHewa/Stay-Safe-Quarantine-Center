import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "../../components/NavBar.js";
import "../../components/css/NavBar.css";
import Footer from '../../components/Footer.js';
import '../../css file/PackageFetch.css'
import ourcenter from '../../img/ourcenter.png';
import BarchartOurCenter from '../../components/BarchartOurCenter';

function ServiceFetch() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Fetch packages from the server when the component mounts
        axios.get('http://localhost:8070/service') // Replace with your server's API endpoint
            .then((response) => {
                setServices(response.data);
            
            })
            .catch((error) => {
                console.error('Error fetching services:', error);
            });
    }, []);

    return (
        <div className="packages">
            <div className="navbar_pkg">
                <NavBar />
            </div>
            <div className="imageservicecontainer">
                <img src={ourcenter} alt="" className="srvimgbig" />
                <h1 className="txtpkgAboveImage">Our Center</h1>
            </div>
            <Container fluid className="pkgDetails">
                <Row className="pkgrow">
                    {services.map((services) => (
                        <Col lg={4} className="pkgcol" key={services.serviceID}>
                            <Card style={{ width: '25rem' }} id={services.serviceID} border="light">
                                <Card.Img variant="top" src={services.serviceImage} />
                                <Card.Body>
                                    <Card.Title className="basictitlecard" ><b>{services.serviceName}</b></Card.Title>
                                    <Card.Text>
                                        {services.serviceDetails}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className="barchartcontainer">
                        <BarchartOurCenter/>
                   </div>
            <div className="footer_pkg">
                <Footer />
            </div>
        </div>
    );
}

export default ServiceFetch;
