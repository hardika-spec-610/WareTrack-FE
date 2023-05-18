import React, { useEffect } from "react";
import { CDBNavbar } from "cdbreact";
import "../css/styles.css";
import { Col, Row } from "react-bootstrap";
import { userProfile } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.user);
  // console.log("profileNav", profile);
  useEffect(() => {
    dispatch(userProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="nav-wrap d-flex align-items-center">
      <div>
        <span className="wel-text">Welcome, </span>
        <span className="blue-color wel-text">{profile?.firstName}</span>
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
              <div className="profile-round">
                {profile?.avatar ? (
                  <img src={profile?.avatar} alt="person" width="40px" />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt=""
                    width="40px"
                  />
                )}
              </div>
            </Col>
            <Col sm={9} md={9} lg={9} className="pl-0">
              <div>
                <p className="profile-name mb-0">
                  {profile?.firstName} {profile?.lastName}
                </p>
                <p className="profile-role mb-0">{profile?.role}</p>
              </div>
            </Col>
          </Row>
        </div>
      </CDBNavbar>
    </div>
  );
};

export default NavbarComponent;
