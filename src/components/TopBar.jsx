import React from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { List, ThreeDots } from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <Container>
      <Row className="align-items-center justify-content-between">
        <Col className="d-flex align-items-center">
          <h3 className="text-light">TV Shows</h3>
          <Dropdown className="ms-5">
            <Dropdown.Toggle variant="secondary" className="btn-sm rounded-0 bg-black border border-2">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-black">
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Item href="#">Romance</Dropdown.Item>
              <Dropdown.Item href="#">Crime</Dropdown.Item>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Fantasy</Dropdown.Item>
              <Dropdown.Item href="#">Documentary</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end">
          <Button variant="dark" className="dark-background border-0">
            <List />
          </Button>
          <Button variant="dark" className="ms-2 dark-background border-0">
            <ThreeDots />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
