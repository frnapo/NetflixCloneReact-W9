import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Search, Bell, CaretDown } from "react-bootstrap-icons";
import netflixLogo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const MyNav = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <img src={netflixLogo} alt="Logo Netflix" style={{ maxWidth: "115px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <Search color="white" />
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">
              <Bell color="white" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src={avatar} alt="avatar" style={{ maxWidth: "28px" }} />
              <CaretDown color="white" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
