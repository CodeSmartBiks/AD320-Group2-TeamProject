import React, { Component } from 'react';
import Map from "./Map";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function MainBody () {

        return (
        <div>
        <Map/>
        <Router>
      <div>
        <nav>
          <ul className="topnav">
            <li>
              <Link to="/">Map</Link>
            </li>
            <li>
              <Link to="/about">Cart</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            {/* adminpage component, not About */}
            <About />
          </Route>
          <Route path="/users">
            {/* vendorpage component, not Users */}
            <Users />
          </Route>
          <Route path="/">
            {/* customerpage component, not Home */}
            <Home />
          </Route>
        </Switch>
      </div>
      
      
    </Router>
    </div> ) 
    }


function Home() {
  return <h2>Map</h2>;
}

function About() {
  return <h2>Cart</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
    


export default MainBody;
