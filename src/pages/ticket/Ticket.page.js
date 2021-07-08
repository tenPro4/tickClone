import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from './../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from './../../components/UpdateTicket.comp';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const Ticket = () => {
	const {tId} = useParams();

	const[message,setMessage] = useState('');
	const[ticket,setTicket] = useState('');

	useEffect(() =>{
		for(let i =0; i < tickets.length; i++){
			if(tickets[i].id == tId){
				setTicket(tickets[i]);
				continue;
			}
		}

	},[message,tId])

    return (
        <Container>
			<Row>
				<Col>
					<PageBreadcrumb page="Ticket" />
				</Col>
			</Row>

			<Row>
				<Col>
					//alert
				</Col>
			</Row>
			<Row>
				<Col className="text-weight-bolder text-secondary">
					<div className="subject">Subject: {ticket.subject}</div>
					<div className="date">
						Ticket Opened:{" "}
						{ticket.addedAt &&
							new Date(ticket.addedAt).toLocaleString()}
					</div>
					<div className="status">Status: {ticket.status}</div>
                    
				</Col>
				<Col className="text-right">
					<Button
						variant="outline-info"
					>
						Close Ticket
					</Button>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					{ticket.history && (
						<MessageHistory msg={ticket.history} />
					)}
				</Col>
			</Row>
			<hr />

			<Row className="mt-4">
				<Col>
					<UpdateTicket _id={tId}/>
				</Col>
			</Row>
		</Container>
    )
}
