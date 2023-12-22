import { Row, Col, Button, ListGroup } from "react-bootstrap";
import { Paypal } from "react-bootstrap-icons";

const MembershipBillingComponent = () => (
  <Row className="border-top border-secondary mx-auto bg-white">
    <h1 className="mb-3">Account</h1>
    <Col lg={4} className="pt-2 border-top border-1">
      <h5 className="text-secondary mt-2">MEMBERSHIP & BILLING</h5>
      <Button
        variant="dark"
        className="text-black border-0 rounded-0 shadow-sm border-end border-bottom border-2 px-4"
        style={{ backgroundColor: "rgb(215, 215, 215)" }}
      >
        Cancel Membership
      </Button>
    </Col>

    <Col lg={4} className="pt-2 border-top border-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item className="pb-0">
          <strong>student@strive.school</strong>
        </ListGroup.Item>
        <ListGroup.Item className="pt-0 pb-0 text-secondary">Password: **********</ListGroup.Item>
        <ListGroup.Item className="pt-0 text-secondary">Phone: 321 044 1279</ListGroup.Item>
      </ListGroup>
    </Col>

    <Col lg={4} className="pt-2 text-end border-top border-1">
      <ListGroup variant="flush" className="no-border-listgroup pb-0">
        <ListGroup.Item className="no-underline-link pb-0">
          <a href="#test" className="text-info">
            Change account email
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0 pb-0">
          <a href="#test" className="text-info">
            Change password
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0">
          <a href="#test" className="text-info">
            Change phone number
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Col>

    <Col lg={4} className="mt-2"></Col>

    <Col lg={4} className="pt-2 border-top border-1 mt-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item>
          <strong>
            <Paypal /> PayPal &nbsp;&nbsp; admin@strive.school
          </strong>
        </ListGroup.Item>
      </ListGroup>
    </Col>

    <Col lg={4} className="pt-2 text-end border-top border-1 mt-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item className="no-underline-link pb-0">
          <a href="#test" className="text-info">
            Update payment info
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0">
          <a href="#test" className="text-info">
            Billing details
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Col>

    <Col lg={4} className="pt-2 mt-1"></Col>
    <Col lg={4} className="pt-2 text-end border-top border-1 mt-1"></Col>
    <Col lg={4} className="pt-2 text-end border-top border-1 mt-1">
      <ListGroup variant="flush" className="no-border-listgroup">
        <ListGroup.Item className="no-underline-link pb-0">
          <a href="#test" className="text-info">
            Reedem gift card or promo code
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="no-underline-link pt-0">
          <a href="#test" className="text-info">
            Where to buy gift cards
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
);

export default MembershipBillingComponent;
