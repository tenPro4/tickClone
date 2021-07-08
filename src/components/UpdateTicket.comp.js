import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export const UpdateTicket = ({ _id }) => {
  const [message, setMessage] = useState("");
  useEffect(() =>{},[message]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const msgObj = {
      message
    };

    setMessage("");
  };

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <br/>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          value={message}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};
