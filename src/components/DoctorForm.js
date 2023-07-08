import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function DoctorForm() {
  return (
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
            <Form.Label>Doctor ID</Form.Label>
          <Form.Control placeholder="Doctor ID" />
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
            <Form.Label>Medical license Number</Form.Label>
          <Form.Control placeholder="Medical license Number" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
            <Form.Label>Specialization</Form.Label>
          <Form.Control placeholder="Specialization" />
        </Col>
        <Col>
            <Form.Label>Professional Experience</Form.Label>
          <Form.Control placeholder="Professional Experience" />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Col>
            <Form.Label>Available Days</Form.Label>
          <Form.Control placeholder="Available Days" />
        </Col>
        <Col>
            <Form.Label>Emergency Contact number</Form.Label>
          <Form.Control placeholder="Emergency Contact number" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col >
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Male">
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
            </Form.Group>
        </Col>
        <Col >
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Relationship</Form.Label>
                <Form.Select defaultValue="Male">
                    <option>Married</option>
                    <option>Unmarried</option>
                </Form.Select>
            </Form.Group>
        </Col>
        
      </Row>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Enter skills , Training and Certification details in pdf format</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <br />
      <Row>
            <Col>
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </Col>
            <Col>
            
            </Col>
      </Row>
      <br />
      <br />
      <Button variant="success">Enter</Button>{' '}
      <Button variant="secondary">Search</Button>{' '}
      <Button variant="primary">Update</Button>{' '}
      <Button variant="danger">Delete</Button>{' '}
      
    </Form>
  );
}

export default DoctorForm;