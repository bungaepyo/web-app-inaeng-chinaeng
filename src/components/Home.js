import React from "react";
import '../styles/Home.css';
import { ButtonToolbar, Button, Col, Dropdown, Card, Container } from "react-bootstrap";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";
import mainLogo from '../images/logo.png';
import IanaTimeZones from '../components/TimeZone';
import {CustomToggle, CustomMenu} from '../components/Dropdown'
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {InlineTimePicker, InlineDatePicker} from '../components/Picker'
import MomentUtils from '@date-io/moment';
import TimeCardList from './TimeCardList'

const timeZones = IanaTimeZones;

class Home extends React.Component{

    componentDidMount(){
    }

    state = {
        selectedTimeZone: null,
    }

    resetSelected(){
        this.setState({selectedTimeZone: null})
    }
    
    setSelectedTimeZone(timeZone){
        this.setState({selectedTimeZone: timeZone})
    }

    nextPath(path){
        this.props.history.push(path);
    }

    addCard(e){
        e.preventDefault();

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
                                                    <Col className="my-time-time">
                                                            <Card.Body className="my-time-card-body-1">
                                                                <Dropdown className="my-time-dropdown">
                                                                    <Dropdown.Toggle as={CustomToggle} className="my-time-dropdown-toggle">
                                                                    {this.state.selectedTimeZone!=null ?this.state.selectedTimeZone:"Time Zone"}
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu as={CustomMenu}
                                                                                   className="my-time-dropdown-menu">
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
                                                    <Col className="my-time-date">
                                                            <Card.Body className="my-time-card-body-2">
                                                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                                                    <InlineDatePicker date={new Date()}/>
                                                                </MuiPickersUtilsProvider>
                                                            </Card.Body>
                                                    </Col>
                                            </Container>
                                        </Card>
                                    </div>
                                    <div className="reset-button">
                                        <h5 onClick={this.resetSelected.bind(this)}>Reset</h5>
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
                                                    onClick={this.addCard}>
                                                    <AddCircleIcon fontSize="large" style={{ color: blue[300] }}/>
                                                </IconButton>
                                            </Container>
                                        </Card>
                                        <TimeCardList></TimeCardList>
                                        </div>
                                    </div>
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