import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";

export default function WebsiteNavbar() {
    let base = "#"
    return (
      <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href={base + ""}>Jen Gordon</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={base + "AT"}>Appalachian Trail</Nav.Link>
              <Nav.Link href={base + "projects"}>Projects</Nav.Link>
              <NavDropdown title="Posts" id="collapsible-nav-dropdown">
                <NavDropdown.Item href={base + ""}>TidePool</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}