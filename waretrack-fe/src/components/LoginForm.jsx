import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import "../css/styles.css";
// import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Form className=" my-3 max-form">
      <div className="mb-2">
        <Form.Group className="mb-4">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            className="dark-bdr-fill"
            type="email"
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
