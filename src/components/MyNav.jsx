import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Search, Bell, CaretDown } from "react-bootstrap-icons";
import netflixLogo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const MyNav = () => {
  return (
    <Navbar expand="lg" variant="dark" className="dark-background">
      <Navbar.Brand href="#">
        <img src={netflixLogo} alt="Logo Netflix" style={{ maxWidth: "115px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="text-white hover-zoom">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="text-white hover-zoom">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="text-white hover-zoom">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="text-white hover-zoom">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="text-white hover-zoom">
            My List
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#" className="hover-zoom">
            <Search color="white" />
          </Nav.Link>
          <Nav.Link href="#" className="hover-zoom">
            KIDS
          </Nav.Link>
          <Nav.Link href="#" className="hover-zoom">
            <Bell color="white" />
          </Nav.Link>
          <Nav.Link href="#" className="hover-zoom">
            <img src={avatar} alt="avatar" style={{ maxWidth: "28px" }} />
            <CaretDown color="white" className="ms-2" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
