import React from 'react';
import "../styles/TimeCard.css";
import { Col, Dropdown, Card, Container } from "react-bootstrap";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";
import IanaTimeZones from '../components/TimeZone';
import {CustomToggle, CustomMenu} from '../components/Dropdown'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {InlineTimePicker, InlineDatePicker} from '../components/Picker'
import MomentUtils from '@date-io/moment';

const timeZones = IanaTimeZones;

class TimeCard extends React.Component{
    
    state = {
        selectedTimeZone: null,
    }
    
    setSelectedTimeZone(timeZone){
        this.setState({selectedTimeZone: timeZone})
    }

    render(){
        return<div className="your-time-card">
                <Card className="card">
                    <Container className="card-container">
                            <Col className="your-time-time">
                                    <Card.Body className="your-time-card-body-1">
                                        <Dropdown className="your-time-dropdown">
                                            <Dropdown.Toggle as={CustomToggle} className="your-time-dropdown-toggle">
                                            {this.state.selectedTimeZone!=null ?this.state.selectedTimeZone:"Time Zone"}
                                            </Dropdown.Toggle>
    
                                            <Dropdown.Menu as={CustomMenu}
                                                           className="your-time-dropdown-menu">
                                                {timeZones.map((timeZone,i) =>
                                                    <Dropdown.Item onSelect={()=>this.setSelectedTimeZone(timeZone)} key={i}>{timeZone}</Dropdown.Item>
                                                )}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                            <InlineTimePicker date={new Date()}/>
                                        </MuiPickersUtilsProvider>
                                    </Card.Body>
                            </Col>
                            <div className="divider"></div>
                            <Col className="your-time-date">
                                    <Card.Body className="your-time-card-body-2">
                                        <MuiPickersUtilsProvider utils={MomentUtils}>
                                            <InlineDatePicker date={new Date()}/>
                                        </MuiPickersUtilsProvider>
                                    </Card.Body>
                            </Col>
                    </Container>
                </Card>
            </div>
    }
}

export default TimeCard;