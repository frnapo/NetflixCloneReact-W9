import { Button, Col, Dropdown, Row } from "react-bootstrap";
import kidsIcon from "../assets/kids_icon.png";

const ProfileComponent = () => (
  <Row className="g-lg-0">
    <Col sm={6} className="text-end pe-3">
      <img src={kidsIcon} alt="kids-icon" style={{ maxWidth: "115px" }} />
    </Col>
    <Col sm={6}>
      <Button variant="secondary" className="btn-sm rounded-0 text-start" style={{ minWidth: "280px" }}>
        Strive student
      </Button>
      <Col sm={6} className="text-end pe-3"></Col>
      <Col sm={6}>
        <p className="text-white mt-3">Language:</p>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" className="btn-sm rounded-0 bg-black border-2">
            English
          </Dropdown.Toggle>
          <Dropdown.Menu className="bg-black">
            <Dropdown.Item href="#" className="text-secondary">
              Italian
            </Dropdown.Item>
            <Dropdown.Item href="#" className="text-secondary">
              German
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Col>
  </Row>
);
export default ProfileComponent;
