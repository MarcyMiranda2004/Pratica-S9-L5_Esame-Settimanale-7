import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, Row, Col } from 'react-bootstrap';
import { BsSearch, BsBellFill, BsPersonCircle } from 'react-icons/bs'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/Navbar.css';
import logo from '../assets/logo.png';
import {Link, useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const [searchVisible, setSearchVisible] = useState(false); 
  const location = useLocation();
  console.log(location);

  const getSearchPlaceholder = () => {
  switch (location.pathname) {
    case '/tvshows':
      return 'Cerca una serie TV...';
    case '/movies':
      return 'Cerca un film...';
    case '/recentlyAdded':
      return 'Cerca tra gli ultimi arrivi...';
    case '/myList':
      return 'Cerca nella tua lista...';
    default:
      return 'Cerca contenuti...';
  }
};

  return (
    <Navbar expand="lg" className='bg-n-tertiary m-0'>
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" style={{ width: '100px', height: '55px' }} />
      </Navbar.Brand>
        
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
        
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto mb-2 mb-lg-0">

          <Nav.Item>
            <Link to="/" className={`nav-link text-white ${location.pathname === '/' ? 'text-fw-bold active border-bottom border-danger' : ''}`}>
              Home
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/tvshows" className={`nav-link text-white ${location.pathname === '/tvshows' ? 'text-fw-bold active border-bottom border-danger' : ''}`}>
              TV Shows
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={"/movies"} className={`nav-link text-white ${location.pathname === '/movies' ? 'text-fw-bold active border-bottom border-danger' : ''}`}>
              Movies
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={"/recentlyAdded"} className={`nav-link text-white ${location.pathname === '/recentlyAdded' ? 'text-fw-bold active border-bottom border-danger' : ''}`}>
              Recently Added
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={"/myList"} className={`nav-link text-white ${location.pathname === '/myList' ? 'text-fw-bold active border-bottom border-danger' : ''}`}>
              My List
            </Link>
          </Nav.Item>
        </Nav>

        {searchVisible && (
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder={getSearchPlaceholder()}
                  className="mr-sm-2"
                  id="searchInput"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className='bg-black' id='searchButton'>Cerca</Button>
              </Col>
            </Row>
          </Form>
        )}

        <div className="d-flex align-items-center ms-3">

          <Button 
            variant="link" 
            className="text-white " 
            onClick={() => setSearchVisible(!searchVisible)} >
            <BsSearch size={20} />
          </Button>
          
          <div className="fw-bold text-white mx-3">KIDS</div>
            <Button variant="link" className="text-white">
              <BsBellFill size={20} />
            </Button>

            <Button variant="link" className="text-white">
              <BsPersonCircle size={20} />
            </Button>
          </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
