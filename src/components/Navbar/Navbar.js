// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file
import styled from 'styled-components';



const NavbarComponent = () => {
  const location = useLocation(); // Get current location

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to="/chatbot"
            className={location.pathname === '/chatbot' ? 'active' : ''}
          >
            Chatbot
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/query-board"
            className={location.pathname === '/query-board' ? 'active' : ''}
          >
            Query Board
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/scheme"
            className={location.pathname === '/scheme' ? 'active' : ''}
          >
            Schemes
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/report"
            className={location.pathname === '/report' ? 'active' : ''}
          >
            Report
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className={location.pathname === '/login' ? 'active' : ''}
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/register"
            className={location.pathname === '/register' ? 'active' : ''}
          >
            Register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
