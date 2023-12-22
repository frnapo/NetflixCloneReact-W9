import { Row, Col, ListGroup } from "react-bootstrap";

const PlanDetailsComponent = () => (
  <Row className="mx-auto bg-white">
    <Col lg={4} className="pt-2 border-top border-1 mt-1">
      <h5 className="text-secondary mt-1">PLAN DETAILS</h5>
    </Col>
    <Col lg={4} className="pt-2 border-top border-1 mt-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item>
          <strong>Premium</strong>
        </ListGroup.Item>
      </ListGroup>
    </Col>

    <Col lg={4} className="pt-2 text-end border-top border-1 mt-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item className="no-underline-link">
          <a href="#test" className="text-info">
            Change plan
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
);

export default PlanDetailsComponent;
