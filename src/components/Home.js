import React from "react";
import '../styles/Home.css';
import { ButtonToolbar, Button, Col, Row, Dropdown } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import TimeCard from "../components/TimeCard";
import Container from "react-bootstrap/Container";
import Divider from '@material-ui/core/Divider'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";
import mainLogo from '../images/logo.png';
import IanaTimeZones from '../components/TimeZone.js';
import {CustomToggle, CustomMenu} from '../components/Dropdown'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {InlineTimePicker, InlineDatePicker} from '../components/Picker.js'
import MomentUtils from '@date-io/moment';

const timeZones = IanaTimeZones;

class Home extends React.Component{
    
    nextPath(path){
        this.props.history.push(path);
    }

    state = {
        cardsCount: 0,
        selectedDate: new Date("2014-08-18T21:11:54")
    };

    // handleDateChange = (Date) => {
    //     selectedDate.setState(Date)
    // }

    addHandler = () => {
        this.setState(prevState => {
            return {cardsCount: prevState.cardsCount+1};
        })
    };

    getCards = () => {
        let cards =[];
        for(let i=0; i<this.state.cardsCount; i++){
            cards.push(TimeCard)
        }
        return cards;
    }

    render(){
        return  <div className="app">
                        <div className="header">
                            <img src={mainLogo} alt="main-logo"/>
                            <h1 id="main-title">Convert and Invite!</h1>
                        </div>

                        <div className="card-block">
                            <div className="card-block my-time">
                                <div className="vertical-block">
                                    <div className="title">
                                        <h3>My Time</h3>
                                    </div>
                                    <div className="my-time-card">
                                        <Card className="card">
                                            <Container className="card-container">
                                                <Row>
                                                    <Col className="my-time-time">
                                                            <Card.Body>
                                                                <Dropdown className="my-time-dropdown">
                                                                    <Dropdown.Toggle as={CustomToggle} className="my-time-dropdown-toggle">
                                                                    Time Zone
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu as={CustomMenu} className="my-time-dropdown-menu">
                                                                        {timeZones.map(timeZone =>
                                                                            <Dropdown.Item value={timeZone}>{timeZone}</Dropdown.Item>
                                                                        )}
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                    <InlineTimePicker />
                                                                </MuiPickersUtilsProvider>,
                                                            </Card.Body>
                                                    </Col>
                                                    <Divider orientation="vertical" flexItem />
                                                    <Col className="my-time-date">
                                                            <Card.Body>
                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                    <InlineDatePicker />
                                                                </MuiPickersUtilsProvider>,
                                                            </Card.Body>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card>
                                    </div>
                                </div>
                            </div>

                            <div className="card-block your-time">
                                <div className="vertical-block">
                                    <div className="title">
                                            <h3>Their Time</h3>
                                    </div>
                                    <div className="your-time-card-container">
                                        <div className="your-time-card">
                                        <Card className="card">
                                            <Container className="card-container">
                                                <IconButton 
                                                    className="card-add-button"
                                                    onClick={this.addHandler}>
                                                    <AddCircleIcon fontSize="large" style={{ color: blue[300] }}/>
                                                </IconButton>
                                                {this.getCards()}
                                            </Container>
                                        </Card>
                                        </div>
                                    </div>
                                    {/* <IconButton className="card-add-button">
                                        <AddCircleIcon fontSize="large" style={{ color: blue[300] }}/>
                                    </IconButton> */}
                                </div>
                            </div>
                        </div>
                        
                            <div className="footer">
                                <ButtonToolbar className="send-button">
                                    <Button  
                                        variant="send" 
                                        size="lg"
                                        onClick={()=> this.nextPath('/invite')}
                                        style={{color:"white", background:"#6DB4F7"}}>
                                            Send Google Calendar
                                    </Button>{' '} 
                                </ButtonToolbar>
                            </div>
                </div>;
    }
}

export default Home;