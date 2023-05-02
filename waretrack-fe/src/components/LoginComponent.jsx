import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import sideLogo from "../assets/side-logo.svg";
import Logo from "../assets/Logo.svg";
import googleIcon from "../assets/google-icon.svg";
import "../css/styles.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions";

const LoginComponent = () => {
  const dispatch = useDispatch();
  // const allUsers = useSelector((state) => state.allUsers.users);
  // console.log("allUsers", allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-wrapper">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <Image src={Logo} alt="logo" />
              <h4 className="mt-4">Login</h4>
              <p className="mt-3">see your growth and get support!</p>
              <a
                className="btn"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                href={`${process.env.REACT_APP_BE_URL}/users/auth/google`}
              >
                <span>Sign in with google</span>{" "}
                <Image src={googleIcon} alt="google logo" />
              </a>
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
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;
