import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navibar.css';

const Navibar = () => {
    return (
      <div className="btn-style">
      <Navbar collapseOnSelect expand="lg">
          <Container className="nav-area navColor">
              <Navbar.Brand href="/home"><h5>JANNATUL NAYEM TONNY</h5></Navbar.Brand>
              <Nav className="me-auto">
              </Nav>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end navColor">
              
              <Nav.Link as={Link} to="/home"><p>Home</p></Nav.Link>
              <Nav.Link as={Link} to="/aboutme"><p>AboutMe</p></Nav.Link>
              <Nav.Link as={Link} to="/projects"><p>My Projects</p></Nav.Link>
              <Nav.Link as={Link} to="/contact"><p>Contact Me</p></Nav.Link>
             
              </Navbar.Collapse>
          </Container>
       </Navbar>
  </div>
    );
};

export default Navibar;