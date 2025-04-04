import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent.jsx';  
import { Container, Row, Col } from 'react-bootstrap';
import '../style/style.css'; 

class SettingsComponent extends Component {

  render() {
    return (
      <div className='bg-white'>
        <header className="bg-secondary">
          <NavbarComponent />
        </header>

        <main className="d-flex align-items-center mt-5">
          <Container>
            <h1 className="border-bottom pb-2">Account</h1>

            {/* User Info */}
            <Row className="d-flex">
              <Col md={3} className="mt-2">
                <h2 className="text-tertiary fs-4">MEMBERSHIP & BILLING</h2>
                <button className="bg-light p-2 px-5 border-0 border-bottom fw-semibold">
                  Cancel Membership
                </button>
              </Col>

              <Col md={9} className="mt-2">
                <div className="d-flex justify-content-between">
                  <p className="fw-semibold">name@email.dom</p>
                  <a href="#" className="text-decoration-none">
                    Change account email
                  </a>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="text-tertiary">Password: **********</p>
                  <a href="#" className="text-decoration-none">Change password</a>
                </div>

                <div className="d-flex justify-content-between border-bottom">
                  <p className="text-tertiary">Phone: 000 000 0000</p>
                  <a href="#" className="text-decoration-none">Change phone number</a>
                </div>

                <div className="mt-2 d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <p className="fw-semibold">
                      <i className="bi bi-paypal"></i> PayPal name@email.dom
                    </p>
                    <a href="#" className="text-decoration-none">Update payment info</a>
                  </div>

                  <div className="d-flex justify-content-end border-bottom pb-2">
                    <a href="#" className="text-decoration-none">Billing details</a>
                  </div>

                  <div className="d-flex justify-content-end pb-2 mt-2">
                    <a href="#" className="text-decoration-none">Redeem gift card or promo code</a>
                  </div>

                  <div className="d-flex justify-content-end border-bottom pb-2">
                    <a href="#" className="text-decoration-none">Where to buy gift cards</a>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Plan Details */}
            <Row className="d-flex justify-content-between mx-1 me-4 mt-2 border-bottom">
              <Col>
                <h4 className="text-tertiary">PLAN DETAILS</h4>
              </Col>
              <Col className="d-flex justify-content-end">
                <p className="fw-semibold">
                  Premium <span className="border border-3 rounded-2 px-1">ULTRA <b>HD</b></span>
                </p>
                <a href="#" className="text-decoration-none">Change plan</a>
              </Col>
            </Row>

            {/* Settings */}
            <Row className="mx-1 me-4 mt-2 d-flex justify-content-between border-bottom pb-2">
              <Col>
                <h4 className="text-tertiary">SETTINGS</h4>
              </Col>
              <Col className="d-flex flex-column align-items-end">
                <a href="#" className="text-decoration-none">Parental controls</a>
                <a href="#" className="text-decoration-none">Test participation</a>
                <a href="#" className="text-decoration-none">Manage download devices</a>
                <a href="#" className="text-decoration-none">Activate a device</a>
                <a href="#" className="text-decoration-none">Recent device streaming activity</a>
                <a href="#" className="text-decoration-none">Sign out of all devices</a>
              </Col>
            </Row>

            {/* My Profile */}
            <Row className="d-flex justify-content-between mx-1 me-4 mt-2 border-bottom pb-2">
              <Col>
                <h4 className="text-tertiary">MY PROFILE</h4>
              </Col>
              <Col className="d-flex justify-content-between align-items-center">
                <label className="d-flex justify-content-center align-items-center">
                  <img src="https://placecats.com/100/100" alt="avatar" width="30px" height="30px" />
                  <p className="pt-2 ms-2 fw-semibold">Username</p>
                </label>
                <div className="d-flex flex-column align-items-end">
                  <a href="#" className="text-decoration-none">Manage profiles</a>
                  <a href="#" className="text-decoration-none">Add profiles email</a>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default SettingsComponent;
