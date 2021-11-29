import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navibar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Jannatul Nayem</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Projects</Nav.Link>
      {/* <Nav.Link href="#pricing">AboutMe</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Navibar;