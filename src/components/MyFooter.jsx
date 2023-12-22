import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="mt-5 mx-5">
      <Container>
        <Row>
          <Col xs={12} lg={3} className="d-flex justify-content-center p-0 mb-3" id="bootstrap-icons">
            <Button variant="link" className="text-white text-decoration-none fs-4">
              <Facebook />
            </Button>
            <Button variant="link" className="text-white text-decoration-none fs-4">
              <Instagram />
            </Button>
            <Button variant="link" className="text-white text-decoration-none fs-4">
              <Twitter />
            </Button>
            <Button variant="link" className="text-white text-decoration-none fs-4">
              <Youtube />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Audio and Subtitles
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Media Center
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Privacy
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Contact Us
                </Button>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Audio Description
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Investor Relations
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Legal Notices
                </Button>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Help Center
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Jobs
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Cookie Preferences
                </Button>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Gift Cards
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Terms of Use
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-white text-decoration-none">
                  Corporate Information
                </Button>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="p-0 text-secondary m-0">
            <Button variant="outline-secondary" className="btn-sm mt-3 rounded-0 mt-3 mb-2">
              Service Code
            </Button>
            <p>
              © 1997-2019 Netflix, Inc. {String.fromCharCode(123)}i-0d00fcda2fdf9c0de{String.fromCharCode(125)}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
