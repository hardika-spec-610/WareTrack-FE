import NavbarComponent from "./NavbarComponent";
import Sidebar from "./Sidebar";
import "../css/styles.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import uploadIcon from "../assets/upload-icon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile, userProfile } from "../redux/actions";
import AccountUploadImage from "./AccountUploadImage";
const token = localStorage.getItem("accessToken");

const AccountSetting = () => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.user);
  console.log("profileNav", profile);
  const [show, setShow] = useState(false);

  const [editProfile, setEditProfile] = useState({
    firstName: profile.firstName || "",
    lastName: profile.lastName || "",
    email: profile.email || "",
    phoneNumber: profile.phoneNumber || "",
    address: {
      street: profile.address.street || "",
      city: profile.address.city || "",
      zip: profile.address.zip || "",
      country: profile.address.country || "",
      state: profile.address.state || "",
    },

    avatar: profile.avatar || "",
  });

  useEffect(() => {
    dispatch(userProfile());
    dispatch(updateUserProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // if (typeof editProfile.avatar === "object") {
      //   const formData = new FormData();
      //   formData.append("avatar", editProfile.avatar);
      //   dispatch(updateUserImage(profile._id, formData));
      // }
      //   const profileDetails = {
      //     firstName: document.getElementById("firstName").value,
      //     lastName: document.getElementById("lastName").value,
      //     email: document.getElementById("email").value,
      //     phoneNumber: document.getElementById("phoneNumber").value,
      //     street: document.getElementById("street").value,
      //     city: document.getElementById("city").value,
      //     zip: document.getElementById("zip").value,
      //     country: document.getElementById("country").value,
      //     state: document.getElementById("state").value,
      //   };
      const profileDetails = {
        firstName: editProfile.firstName,
        lastName: editProfile.lastName,
        email: editProfile.email,
        phoneNumber: editProfile.phoneNumber,
        address: {
          street: editProfile.address.street,
          city: editProfile.address.city,
          zip: editProfile.address.zip,
          country: editProfile.address.country,
          state: editProfile.address.state,
        },
      };
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileDetails),
      });

      if (response.ok) {
        const updatedProfile = await response.json();
        console.log("updatedProfile", updatedProfile);
        setEditProfile(updatedProfile);
      } else {
        console.log("Error fetching Data!");
      }
    } catch (error) {
      console.log("Error fetching Data!");
    }
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="navbar-wrapper">
        <NavbarComponent />
        <div className="hero-section">
          <div className="account-section px-3 py-4">
            <h5>Account Settings</h5>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      id="firstName"
                      className="account-input"
                      placeholder="First Name"
                      value={editProfile.firstName}
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      id="lastName"
                      className="account-input"
                      placeholder="Last Name"
                      value={editProfile.lastName}
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      required
                      id="email"
                      className="account-input"
                      placeholder="Your Email Address"
                      value={editProfile.email}
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          email: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      id="phoneNumber"
                      className="account-input"
                      placeholder="Your Phone Number"
                      value={editProfile.phoneNumber}
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      id="street"
                      className="account-input"
                      placeholder="VoltmannStr. 500"
                      value={editProfile.address?.street}
                      onChange={(e) =>
                        setEditProfile({
                          ...editProfile,
                          address: {
                            ...editProfile.address,
                            street: e.target.value,
                          },
                        })
                      }
                    />
                  </Form.Group>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          id="city"
                          className="account-input"
                          placeholder="Berlin"
                          value={editProfile.address?.city}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              address: {
                                ...editProfile.address,
                                city: e.target.value,
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                          type="text"
                          id="zip"
                          placeholder="35498"
                          className="account-input"
                          value={editProfile.address?.zip}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              address: {
                                ...editProfile.address,
                                zip: e.target.value,
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          id="country"
                          className="account-input"
                          placeholder="Germany"
                          value={editProfile.address?.country}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              address: {
                                ...editProfile.address,
                                country: e.target.value,
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          id="state"
                          className="account-input"
                          placeholder="Berlin"
                          value={editProfile.address?.state}
                          onChange={(e) =>
                            setEditProfile({
                              ...editProfile,
                              address: {
                                ...editProfile.address,
                                state: e.target.value,
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                  <div className="w-30 text-center">
                    <div className="position-relative">
                      {profile.avatar ? (
                        <img
                          src={profile.avatar}
                          className="acc-img w-100"
                          alt="profile"
                          width="100"
                          height="120"
                        ></img>
                      ) : (
                        <div className="img-border py-3">
                          <img
                            width="100"
                            height="120"
                            src="https://img.icons8.com/stickers/100/user.png"
                            alt="user"
                            className="w-100"
                          />
                        </div>
                      )}
                      <img
                        src={uploadIcon}
                        alt="upload-icon"
                        className="upload-absolute"
                        onClick={handleShow}
                      />
                    </div>
                    <AccountUploadImage show={show} handleClose={handleClose} />
                  </div>
                </Col>
              </Row>

              <Button type="submit" className="mt-2 w-25 blue-btn ">
                Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
