import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import "../css/styles.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchLoginData } from "../redux/actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email", email);
  console.log("password", password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in both email and password");
      return;
    }
    await dispatch(fetchLoginData({ email, password }));
    navigate("/dashboard");
  };

  return (
    <Form className=" my-3 max-form">
      <div className="mb-2">
        <Form.Group className="mb-4">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            className="dark-bdr-fill"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password*</Form.Label>
          <Form.Control
            className="dark-bdr-fill"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <a href="#forgotPassword" className="link-blue">
          Forgot password?
        </a>
      </div>
      <div>
        <Button
          type="submit"
          className="mt-2 w-100 blue-btn "
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </div>
    </Form>
  );
};
export default LoginForm;
