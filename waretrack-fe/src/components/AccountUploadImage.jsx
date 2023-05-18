import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUserImage, userProfile } from "../redux/actions";

import "../css/styles.css";

const AccountUploadImage = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.user);
  console.log("profileNavImg", profile);
  const [showImage, setShowImage] = useState({ avatar: profile.avatar || "" });

  useEffect(() => {
    dispatch(userProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = async () => {
    const data = new FormData();
    data.append("avatar", showImage);
    dispatch(updateUserImage(profile._id, data));
  };

  return (
    <>
      {" "}
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File
                type="file"
                id="avatar"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setShowImage(e.target.files[0]);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="secondary-btn"
            onClick={props.handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="blue-btn "
            onClick={() => {
              props.handleClose();
              uploadImage();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AccountUploadImage;
