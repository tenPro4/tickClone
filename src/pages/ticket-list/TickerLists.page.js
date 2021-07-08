import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import { SearchForm } from './../../components/search-form/SearchForm.comp';
import tickets from '../../assets/data/dummy-tickets.json'

export const TickerLists = () => {
    return (
        <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket Lists" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Link to="/add-ticket">
              <Button variant="info">Add New Ticket</Button>
            </Link>
          </Col>
          <Col className="text-right">
            <SearchForm />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <TicketTable tickets={tickets}/>
          </Col>
        </Row>
      </Container>
    )
}
