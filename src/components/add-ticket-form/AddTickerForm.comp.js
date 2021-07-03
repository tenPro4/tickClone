import React, { useState, useEffect } from "react";
import {
  Form,
  Jumbotron,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const AddTickerForm = () => {
  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFrmDataErro(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    });
  };

  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <div>
        {/* {error && <Alert variant="danger">{error}</Alert>}
          {successMsg && <Alert variant="primary">{successMsg}</Alert>}
          {isLoading && <Spinner variant="primary" animation="border" />} */}
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmData.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataErro.subject && "SUbject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmData.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};
