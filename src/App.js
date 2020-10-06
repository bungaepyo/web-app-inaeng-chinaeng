import React, { Component } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Invite from "./components/Invite";
import {HashRouter as Router, Route} from "react-router-dom";


class App extends Component{
  
    render() {
        return <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/invite" exact component={Invite}/>
        </Router>
    }
} 

export default App;