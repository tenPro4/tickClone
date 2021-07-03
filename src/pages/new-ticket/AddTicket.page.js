import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTickerForm } from "../../components/add-ticket-form/AddTickerForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";


export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
            <AddTickerForm/>
        </Col>
      </Row>
    </Container> 
  );
};
