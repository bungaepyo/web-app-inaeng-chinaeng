import React from "react";
import '../styles/Home.css';
import { ButtonToolbar, Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import TimeCard from "../components/TimeCard";
import Container from "react-bootstrap/Container";
import Divider from '@material-ui/core/Divider'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";
import mainLogo from '../images/logo.png';

class Home extends React.Component{
    
    nextPath(path){
        this.props.history.push(path);
    }

    state = {
        cardsCount: 0
    };

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
                                                                <Card.Title className="card-title">
                                                                    Seoul, Korea KST (GMT +9)
                                                                </Card.Title>
                                                                <Card.Text>01:20 AM / PM</Card.Text>
                                                            </Card.Body>
                                                    </Col>
                                                    <Divider orientation="vertical" flexItem />
                                                    <Col className="my-time-date">
                                                            <Card.Body>
                                                                <Card.Text>Thur, May 14 2020</Card.Text>
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