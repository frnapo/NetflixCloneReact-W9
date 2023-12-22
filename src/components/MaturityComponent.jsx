import { Button, Col, Row } from "react-bootstrap";

const MaturityComponent = () => (
  <Row className="g-lg-0">
    <Col sm={6} className="text-end pe-3"></Col>
    <Col sm={6}>
      <hr className="text-white" />
      <p className="text-white mt-3">Maturity Settings:</p>
      <Button variant="dark">ALL MATURITY RATINGS</Button>
      <p className="text-white mt-3">Show titles of all maturity ratings for this profile.</p>
      <Button variant="outline-secondary px-4 border-1 rounded-0 mb-2">EDIT</Button>
      <hr className="text-white" />
    </Col>
  </Row>
);

export default MaturityComponent;
