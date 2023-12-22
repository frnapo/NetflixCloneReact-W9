import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Square, CheckSquare } from "react-bootstrap-icons";

const AutoplaySettingsComponent = () => {
  const [autoplayNext, setAutoplayNext] = useState(false);
  const [autoplayPreviews, setAutoplayPreviews] = useState(false); //usato hook con ricerca google applicare la check allo square quando cliccata

  return (
    <Row className="g-lg-0">
      <Col sm={6} className="text-end pe-3"></Col>
      <Col sm={6}>
        <p className="text-white">Autoplay controls</p>
        <p className="text-white">
          <span onClick={() => setAutoplayNext(!autoplayNext)} style={{ cursor: "pointer" }}>
            {autoplayNext ? (
              <CheckSquare className="fs-3 me-2 text-secondary" />
            ) : (
              <Square className="fs-3 me-2 text-secondary" />
            )}
          </span>
          Autoplay next episode in a series on all devices.
        </p>
        <p className="text-white">
          <span onClick={() => setAutoplayPreviews(!autoplayPreviews)} style={{ cursor: "pointer" }}>
            {autoplayPreviews ? (
              <CheckSquare className="fs-3 me-2 text-secondary" />
            ) : (
              <Square className="fs-3 me-2 text-secondary" />
            )}
          </span>
          Autoplay previews while browsing on all devices.
        </p>
      </Col>
    </Row>
  );
};

export default AutoplaySettingsComponent;
