import React from 'react';
import "../styles/Card.css";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Divider from '@material-ui/core/Divider'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";

class TimeCard extends React.Component{

    render(){
        return <div className="card-block your-time">
                    <div className="vertical-block">
                        <div className="title">
                                <h3>Their Time</h3>
                        </div>
                        <div className="your-time-card-container">
                            <div className="your-time-card">
                            <Card className="card">
                                <Container>
                                    <Row>
                                        <Col className="your-time-time">
                                                <Card.Body>
                                                    <Card.Title className="card-title">
                                                        New York, USA EDT (GMT +9)
                                                    </Card.Title>
                                                    <Card.Text>
                                                    12:20 AM / PM
                                                    </Card.Text>                                                            </Card.Body>
                                        </Col>
                                        <Divider orientation="vertical" flexItem />
                                        <Col className="your-time-date">
                                                <Card.Body>
                                                    <Card.Text>Wed, May 13 2020</Card.Text>
                                                </Card.Body>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                            </div>
                        </div>
                        <IconButton className="card-add-button">
                            <AddCircleIcon fontSize="large" style={{ color: blue[300] }}/>
                        </IconButton>
                    </div>
                </div>
    }

}