import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <span className="text-light">React bootstrap</span>
    </Navbar.Brand>
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav>
          <Link to="/" className="nav-link text-light">
            Home
          </Link>
        </Nav>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav>
          <Link to="/blog" className="nav-link text-light">
            Blog
          </Link>
        </Nav>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav className="nav-link text-light" href="/home">
          <Link to="/about" className="nav-link text-light">
            About
          </Link>
        </Nav>
      </Nav.Item>
    </Nav>
  </Navbar>
);

export default NavbarComponent;
