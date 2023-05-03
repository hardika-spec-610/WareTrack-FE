import React from "react";
import { CDBNavbar } from "cdbreact";
import "../css/styles.css";
import { Col, Row } from "react-bootstrap";
import smallProfile from "../assets/small-profile.png";

const NavbarComponent = () => {
  return (
    <div className="nav-wrap d-flex align-items-center">
      <div>
        <span className="wel-text">Welcome,</span>
        <span className="blue-color wel-text">Hardika</span>
      </div>
      <CDBNavbar
        dark
        expand="md"
        scrolling
        className="justify-content-end ml-auto"
      >
        <div className="ml-auto">
          <Row>
            <Col sm={3} md={3} lg={3}>
              <img src={smallProfile} alt="person" width="40px" />
            </Col>
            <Col sm={9} md={9} lg={9}>
              <div>
                <p className="profile-name mb-0">Hardika Moradiya</p>
                <p className="profile-role mb-0">Admin</p>
              </div>
            </Col>
          </Row>
        </div>
      </CDBNavbar>
    </div>
  );
};

export default NavbarComponent;
