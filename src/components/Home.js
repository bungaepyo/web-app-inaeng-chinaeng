import React, {useState} from "react";
import '../styles/Home.css';
import { ButtonToolbar, Button, Col, Row, Dropdown, FormControl } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import TimeCard from "../components/TimeCard";
import Container from "react-bootstrap/Container";
import Divider from '@material-ui/core/Divider'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import blue from "@material-ui/core/colors/blue";
import mainLogo from '../images/logo.png';
import IanaTimeZones from '../components/TimeZone.js';

const timeZones = IanaTimeZones;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().includes(value),
            )}
          </ul>
        </div>
      );
    },
);

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