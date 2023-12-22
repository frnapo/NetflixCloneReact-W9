import { Row, Col, ListGroup } from "react-bootstrap";
import avatar from "../assets/avatar.png";

const MyProfileComponent = () => (
  <>
    <Row className="mx-auto bg-white">
      <Col lg={4} className="pt-2 border-top border-1 mt-1">
        <h5 className="text-secondary mt-1">MY PROFILE</h5>
      </Col>
      <Col lg={4} className="pt-2 border-top border-1 mt-1">
        <ListGroup variant="flush" className="no-border-listgroup">
          <ListGroup.Item>
            <strong>
              <img src={avatar} alt="avatar" style={{ maxWidth: "28px" }} className="me-2" />
              Strive Student
            </strong>
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col lg={4} className="pt-2 text-end border-top border-1 mt-1">
        <ListGroup variant="flush" className="no-border-listgroup">
          <ListGroup.Item className="no-underline-link pb-0">
            <a href="#test" className="text-info">
              Manage profiles
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="no-underline-link pt-0">
            <a href="#test" className="text-info">
              Add profile email
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>

    <Row className="mx-auto bg-white">
      <Col lg={4} className="pt-2 mt-1"></Col>
      <Col lg={4} className="pt-2 mt-1">
        <ListGroup variant="flush" className="no-border-listgroup">
          <ListGroup.Item className="no-underline-link pb-0">
            <a href="#test" className="text-info">
              Language
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="no-underline-link pt-0 pb-0">
            <a href="#test" className="text-info">
              Playback settings
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="no-underline-link pt-0">
            <a href="#test" className="text-info">
              Subtitle appearance
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col lg={4} className="pt-2 text-start mt-1">
        <ListGroup variant="flush" className="no-border-listgroup">
          <ListGroup.Item className="no-underline-link pb-0">
            <a href="#test" className="text-info">
              Viewing activity
            </a>
          </ListGroup.Item>
          <ListGroup.Item className="no-underline-link pt-0">
            <a href="#test" className="text-info">
              Ratings
            </a>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </>
);

export default MyProfileComponent;
