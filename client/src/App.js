import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
//
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
//
import Home from './components/Home';
import Quote from './components/Quote'
import Assembly from './components/Assembly'
import Login from './components/Login'
import Manufacturing from './components/Manufacturing';
import Processes from './components/Processes';
//



//


//

import './App.css';
import Summary from './components/Summary';

function App() {

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/quote">Generate Quote</Nav.Link>
            <Nav.Link href="/assembly">Generate Assembly</Nav.Link>          
            <Nav.Link href="/manufacturing">Manufacturing</Nav.Link>
             <Nav.Link href="/processes">Processes</Nav.Link>
             <Nav.Link href="/summary">Summary</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div> 
          <Route render ={()=> <Login/>} path="/login" />         
          <Route render ={()=> < Home />} path="/home" />
          <Route render ={()=> < Quote />} path="/quote" />
          <Route render ={()=> < Assembly />} path="/assembly" />
          <Route render={()=> <Manufacturing />} path="/manufacturing" />
           <Route render={()=> <Processes />} path="/processes" />
           <Route render ={()=> <Summary/>} path="/summary" />
      </div>

    </Router>
  );
}

export default App;
