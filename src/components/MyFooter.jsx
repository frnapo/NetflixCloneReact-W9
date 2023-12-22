import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="mt-5 mx-5">
      <Container>
        <Row>
          <Col xs={12} lg={3} xl={2} className="d-flex justify-content-center p-0 mb-3" id="bootstrap-icons">
            <Button variant="link" className="text-secondary text-decoration-none fs-4 link-hover">
              <Facebook />
            </Button>
            <Button variant="link" className="text-secondary text-decoration-none fs-4 link-hover">
              <Instagram />
            </Button>
            <Button variant="link" className="text-secondary text-decoration-none fs-4 link-hover">
              <Twitter />
            </Button>
            <Button variant="link" className="text-secondary text-decoration-none fs-4 link-hover">
              <Youtube />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Audio and Subtitles
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Media Center
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Privacy
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Contact Us
                </Button>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Audio Description
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Investor Relations
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Legal Notices
                </Button>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Help Center
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Jobs
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Cookie Preferences
                </Button>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <ul className="list-unstyled">
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Gift Cards
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
                  Terms of Use
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-secondary text-decoration-none link-hover">
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
