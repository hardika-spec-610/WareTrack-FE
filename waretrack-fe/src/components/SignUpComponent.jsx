import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import sideLogo from "../assets/side-logo.svg";
import Logo from "../assets/Logo.svg";
import SignUpForm from "./SignUpForm";
import "../css/styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions";

const SignUpcomponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="signup-block">
      <Container fluid>
        <Row>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="d-none d-sm-none d-md-block d-lg-block"
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <img src={sideLogo} alt="person" className="login-image" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="sm-padding">
            <div>
              <Image src={Logo} alt="logo" />
              <h4 className="mt-4">Register</h4>
              <p className="mt-3 font-weight-semibold">
                Manage all your inventory efficiently
              </p>
              <p className="mt-3">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your work profile
              </p>
              <SignUpForm />
              <div>
                <span>Already have an account?</span>
                <Link to={`/`} className="link-blue">
                  {" "}
                  Log in
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpcomponent;
