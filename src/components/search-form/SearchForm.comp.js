import React from 'react'
import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = () => {

    const handleOnChange = (e) => {
        const { value } = e.target;
      };

    return (
        <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
    )
}
