import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
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
            <Form.Label>Employee ID</Form.Label>
          <Form.Control placeholder="Employee ID" />
        </Col>
        <Col>
            <Form.Label>Phone number</Form.Label>
          <Form.Control placeholder="Phone number" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Col>
            <Form.Label>Job Role</Form.Label>
          <Form.Control placeholder="Job Role" />
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Col>
            <Form.Label>Employee ID</Form.Label>
          <Form.Control placeholder="Employee ID" />
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

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;