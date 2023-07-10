import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

function PatientForm() {

    const [date, setDate] = useState(new Date());
    console.log("DATE", date);

  return (
    <Form>
        <fieldset>
            <legend><b>Personal Information</b></legend>
            <Row className="mb-2">
                <Col>
                    <Form.Label>Full name</Form.Label>
                    <Form.Control placeholder="Full name" />
                </Col>
                <Col>
                    <Form.Label>Gender</Form.Label>
                    <div key={`inline-radio`}><Form.Check inline type='radio' label="Male" name='gender'/> <Form.Check inline type='radio' label="Female" name='gender'/></div>
                </Col>
                <Col>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="birthdate" placeholder="Date of Birth" value={date} onChange={(e) => setDate(e.target.value)}/>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col>
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control placeholder="Nationality" />
                </Col>
                <Col>
                    <Form.Label>NIC Number</Form.Label>
                    <Form.Control placeholder="NIC Number" />
                </Col>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Row>
        </fieldset>
        <hr></hr>

        <fieldset>
            <legend><b>Health Information</b></legend>
            <Row className="mb-2">
                <Col>
                    <Form.Label>Covid-19 test results</Form.Label>
                    <div key={`inline-radio`}><Form.Check inline type='radio' label="Positive" name='result'/> <Form.Check inline type='radio' label="Negative" name='result'/><Form.Check inline type='radio' label="Not Tested" name='result'/></div>
                </Col>
                <Col>
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Allergies here'/>
                </Col>
                <Col>
                    <Form.Label>Medications being taken</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Medications here'/>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col>
                    <Form.Label>Existing Medical Conditions</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Medications here'/>
                </Col>
                <Col>
                    <Form.Label>Any Symptoms experienced</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Symptoms here'/>
                </Col>
            </Row>
        </fieldset>
        <hr></hr>

        <fieldset>
            <legend><b>Travel Information</b></legend>
            <Row className="mb-2">
                <Col>
                    <Form.Label>Date of arrival in the country</Form.Label>
                    <Form.Control type="date" name="arrivaldate" placeholder="Date of Arrival" value={date} onChange={(e) => setDate(e.target.value)}/>
                </Col>
                <Col>
                    <Form.Label>Country of Departure</Form.Label>
                    <Form.Control placeholder="Departure Country" />
                </Col>
            </Row>

            <Row className="mb-2">
                <Col>
                    <Form.Label>Any Transit Points</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Details here'/>
                </Col>
                <Col>
                    <Form.Label>Flight or Transport Details</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Details here'/>
                </Col>
            </Row>
        </fieldset>
        <hr></hr>

        <fieldset>
            <legend><b>Quarantine Information</b></legend>
            <Row className="mb-2">
                <Col>
                    <Form.Label>Date of Check-In</Form.Label>
                    <Form.Control type="date" name="checkindate" placeholder="Date of Check-In" value={date} onChange={(e) => setDate(e.target.value)}/>
                </Col>
                <Col>
                    <Form.Label>Assigned Room Number</Form.Label>
                    <Form.Control placeholder="Room Number" />
                </Col>
                <Col>
                    <Form.Label>Duration of Stay</Form.Label>
                    <Form.Control placeholder="Duration of Stay" />
                </Col>
            </Row>

            <Row className="mb-2">
                <Col>
                    <Form.Label>Any Specific Requirements</Form.Label>
                    <Form.Control as="textarea" rows={2} placeholder='Enter the Details here'/>
                </Col>
            </Row>
        </fieldset> 
        <hr></hr>

        <Row>
            <Col>
                <Form.Group className="mb-2" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Col>
            <Col>
            
            </Col>
        </Row>
        <br></br>
        
        <Button variant="success">Enter</Button>{' '}
        <Button variant="secondary">Search</Button>{' '}
        <Button variant="primary">Update</Button>{' '}
        <Button variant="danger">Delete</Button>{' '}
        
    </Form>
  );
}

export default PatientForm;