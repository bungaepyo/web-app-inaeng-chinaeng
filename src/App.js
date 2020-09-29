import React, { Component } from 'react';
import './styles/App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";


class App extends Component{
  
    render() {
        return <Router>
            <Route path="/" component={Home}/>
        </Router>
    }
} 

export default App;