import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, Row, Col } from 'react-bootstrap';
import { BsSearch, BsBellFill, BsPersonCircle } from 'react-icons/bs'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import '../style/Navbar.css';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
  const [searchVisible, setSearchVisible] = useState(false); 

  return (
    <Navbar expand="lg" className='bg-n-tertiary m-0'>
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" style={{ width: '100px', height: '55px' }} />
      </Navbar.Brand>
        
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
        
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Item>
            <Nav.Link href="#" className="fw-bold text-white">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className=" text-white">
              TV Shows
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className=" text-white">
              Movies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className=" text-white">
              Recently Added
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className=" text-white">
              My List
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {searchVisible && (
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Cerca..."
                  className="mr-sm-2"
                  id='searchInput'
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
            onClick={() => setSearchVisible(!searchVisible)} 
          >
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
