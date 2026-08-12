import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import "../css/navbar.css"
import series from "../data/blogSeries.json"



export default function WebsiteNavbar() {
  const [tidepool,setTidpool] = useState(() => 1);
  const [Thref,setHref] = useState(() => "#blog/0")

  useEffect(() => {
    const entry = series.filter((d) => d.series_name === "tidepool");
    setTidpool(entry["last"]);
    console.log(tidepool,"setvalue");
  },[]);

  useEffect(() => {
    if (tidepool){
      setHref("#blog/" + tidepool);
    }

  },[tidepool])

let base = "#"
  return (
    <Navbar collapseOnSelect variant="dark" expand="sm" sticky="top" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href={base + ""}>Jen Gordon</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={base + "AT"}>Appalachian Trail</Nav.Link>
            <Nav.Link href={base + "projects"}>Projects</Nav.Link>
            <NavDropdown title="Posts" id="collapsible-nav-dropdown">
              <NavDropdown.Item href={Thref}>TidePool</NavDropdown.Item>
              <NavDropdown.Item href={"#blog/30"}>AT Map</NavDropdown.Item>
              <NavDropdown.Item href={"#blog/hdg"}>Fanfiction Analysis</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}