import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.webp";
export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            style={{ height: "50px", width: "50px" }}
            src={logo}
            alt="dummy"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/aboutus">About us</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contactus">Contact us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
