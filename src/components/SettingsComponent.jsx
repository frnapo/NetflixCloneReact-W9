import { Row, Col, ListGroup } from "react-bootstrap";

const SettingsComponent = () => (
  <Row className="mx-auto bg-white">
    <Col lg={4} className="pt-2 border-top border-1 mt-1">
      <h5 className="text-secondary mt-1">SETTINGS</h5>
    </Col>
    <Col lg={4} className="pt-2 border-top border-1 mt-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item className="no-underline-link pb-0">
          <a href="#test" className="text-info">
            Parental controls
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0 pb-0">
          <a href="#test" className="text-info">
            Test participation
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0 pb-0">
          <a href="#test" className="text-info">
            Manage download services
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0 pb-0">
          <a href="#test" className="text-info">
            Activate a device
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0 pb-0">
          <a href="#test" className="text-info">
            Recent device streaming activity
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0">
          <a href="#test" className="text-info">
            Sign out of all devices
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Col>

    <Col lg={4} className="pt-2 text-end border-top border-1 mt-1"></Col>
  </Row>
);

export default SettingsComponent;
