//import logo from './logo.svg';
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import firebase from './firebase'
import React from "react";

function App() {
  React.useEffect(()=>{
    const msg = firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token", data);
    })
  })
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/user">User</Link>
            </Nav.Link>
          </Nav>
          </Navbar>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>     
      </Router>
    </div>
  );
}

export default App;
