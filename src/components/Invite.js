import React from "react";
import '../styles/Invite.css';
import { ButtonToolbar, Button, Form } from "react-bootstrap";
import inviteImage from '../images/invite.png'
import { Confirm } from "./Confirm";

const CLIENT_ID = "436917821635-fsq6p4hosj7f4nof79tlphdec5dqprvb.apps.googleusercontent.com";
const API_KEY = "AIzaSyAhsgjdfoPExLBDEQHdr0aG9FK3B_Y_EwM";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";
var gapi = window.gapi;

class Invite extends React.Component{

    state = {
        sendModalShow: false
    }
  
    handleClick = () => {
      gapi.load('client:auth2', () => {
        console.log('loaded client')
  
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
  
        gapi.client.load('calendar', 'v3', () => console.log('bam!'))
  
        gapi.auth2.getAuthInstance().signIn()
        .then(() => {
          
          var event = {
            'summary': 'Test Event',
            'location': '800 Howard St., San Francisco, CA 94103',
            'description': 'Test',
            'start': {
              'dateTime': '2020-10-12T09:00:00-07:00',
              'timeZone': 'America/Los_Angeles'
            },
            'end': {
              'dateTime': '2020-10-12T17:00:00-07:00',
              'timeZone': 'America/Los_Angeles'
            },
            'attendees': [
              {'email': 'jk2299@cornell.edu'},
              {'email': 'tl422@cornell.edu'}
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          }
  
          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
            'sendUpdates':'all',
          })
  
          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
            this.setState({sendModalShow: true})
          })
        })
      })
    }

    render(){

        let sendModalClose = () => this.setState({sendModalShow: false});

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
                            <ButtonToolbar className="send-button" >
                                <Button
                                    variant="send" 
                                    size="lg"
                                    onClick={()=> this.handleClick()
                                    }
                                    style={{color:"white", background:"#6DB4F7"}}>
                                        Send Now
                                </Button>{' '}

                                <Confirm
                                    show={this.state.sendModalShow}
                                    onHide={sendModalClose}
                                />
                            </ButtonToolbar>
                        </div>
                </div>;
    }
}

export default Invite;