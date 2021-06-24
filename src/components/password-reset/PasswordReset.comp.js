import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import {
  Button,
  Alert,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

export const ResetPassword = ({ formSwitcher }) => {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="bg-white">
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <br />
            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
