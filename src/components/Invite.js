import React from "react";
import '../styles/Invite.css';
import { Button, Form } from "react-bootstrap";
import inviteImage from '../images/invite.png'

class Invite extends React.Component{
    render(){
        return  <div className="app">
                        <div className="header">
                            <h1 id="main-title">Set up a Google Calendar</h1>
                        </div>

                        <div className="invite-form-holder">

                            <div className="invite-form">
                                <Form>
                                    <Form.Group controlId="myEmail">
                                        <Form.Label className="form-label">My Email*</Form.Label>
                                        <Form.Control className="form-input" type="email" placeholder="ex) mytime@gmail.com"/>
                                    </Form.Group>
                                    <Form.Group controlId="theirEmail">
                                        <Form.Label className="form-label">Their Email*</Form.Label>
                                        <Form.Control className="form-input" type="email" placeholder="ex) theirtime@gmail.com"/>
                                    </Form.Group>
                                    <Form.Group controlId="meetingAbout">
                                        <Form.Label className="form-label">What is the meeting about?</Form.Label>
                                        <Form.Control className="form-input" as="textarea" rows="3" placeholder="ex) Design Meeting"/>
                                    </Form.Group>
                                </Form>
                            </div>

                            <div className="invite-image">
                                <img src={inviteImage} alt="invite-img"/>
                            </div>

                        </div>
                        
                        <div className="footer">
                            <Button 
                                className="send_button" 
                                variant="send" 
                                size="lg"
                                style={{color:"white", background:"#6DB4F7"}}>
                                    Send Now
                            </Button>{' '}
                        </div>
                </div>;
    }
}

export default Invite;