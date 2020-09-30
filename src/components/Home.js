import React from "react";
import '../styles/Home.css';
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Divider from '@material-ui/core/Divider'

class Home extends React.Component{
    render(){
        return  <div className="app">
                    <main>
                        <div className="header">
                            <h1 id="main-title">Convert and Invite!</h1>
                        </div>

                        <div className="my-time-block">
                            <div id="my-time-title">
                                <h2>My Time</h2>
                            </div>
                            <div class="my-time-card">
                            <Card style={{ width: '40rem' }}>
                                <Container>
                                    <Row>
                                        <Col className="my-time-time">
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                    </Card.Text>
                                                    <Card.Link href="#">Card Link</Card.Link>
                                                    <Card.Link href="#">Another Link</Card.Link>
                                                </Card.Body>
                                        </Col>
                                        <Divider orientation="vertical" flexItem />
                                        <Col className="my-time-date">
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                </Card.Body>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card>
                            </div>
                        </div>

                        <div className="your-time">
                            <div id="your-time-title">
                                <h2>Your Time</h2>
                            </div>
                        </div>

                        <div className="footer">

                        </div>
                    </main>
                </div>;
    }
}

export default Home;