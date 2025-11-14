import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";

export default function WebsiteNavbar() {
    return (
      <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Jen Gordon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/AT">Appalachian Trail</Nav.Link>
              <NavDropdown title="Posts" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="">TidePool</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}