import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navibar = () => {
    return (
      <div className="btn-style">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container className="nav-area">
              <Navbar.Brand href="/home">JANNATUL NAYEM TONNY</Navbar.Brand>
              <Nav className="me-auto">
              </Nav>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutme">AboutMe</Nav.Link>
              <Nav.Link as={Link} to="/projects">My Projects</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
              
              </Navbar.Collapse>
          </Container>
       </Navbar>
  </div>
    );
};

export default Navibar;