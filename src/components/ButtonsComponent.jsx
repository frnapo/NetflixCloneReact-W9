import { Button, Col, Row } from "react-bootstrap";

const ButtonComponents = () => (
  <Row className="g-0">
    <Col lg={4} class></Col>
    <Col lg={2} className="mt-2 text-center text-lg-end">
      <hr className="text-white mb-4" />
      <Button variant="secondary" className="bg-white text-black rounded-0 fw-semibold px-5">
        SAVE
      </Button>
    </Col>
    <Col lg={2} className="mt-2 text-center">
      <hr className="text-white mb-4 d-none d-lg-block" />
      <Button variant="outline-secondary" className="rounded-0 fw-semibold px-5">
        CANCEL
      </Button>
    </Col>
    <Col lg={4} className="mt-2 text-center text-lg-start">
      <hr className="text-white mb-4 d-none d-lg-block " />
      <Button variant="outline-secondary" className="rounded-0 fw-semibold px-5">
        DELETE PROFILE
      </Button>
    </Col>
  </Row>
);

export default ButtonComponents;
