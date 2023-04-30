import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import sideLogo from "../assets/side-logo.svg";
import Logo from "../assets/Logo.svg";
import googleIcon from "../assets/google-icon.svg";
import "../css/styles.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginComponent = () => {
  return (
    <div className="login-wrapper">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <Image src={Logo} alt="logo" />
              <h4 className="mt-4">Login</h4>
              <p className="mt-3">see your growth and get support!</p>
              <Button variant="light">
                <span>Sign in with google</span>{" "}
                <Image src={googleIcon} alt="google logo" />
              </Button>
              <LoginForm />
              <div>
                <span>Not regestered yet?</span>
                <Link to={`/signup`} className="link-blue">
                  {" "}
                  Create a new account
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <img src={sideLogo} alt="person" className="login-image" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;
