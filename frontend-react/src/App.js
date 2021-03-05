import './App.css';
import './Nav.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import AdminsApp from './AdminApp/AdminApp';
import VendorsApp from './VendorsApp/VendorsApp';
import CustomersApp from './CustomersApp/CustomersApp';


import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function App() {


  return (
  
    <div>  
      <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/admin">
            {/* adminpage component */}
            <AdminsApp />
          </Route>
          <Route path="/vendor">
            {/* vendorpage component */}
            <VendorsApp />
            </Route>
          <Route path="/">
            {/* customerpage component */}
            <CustomersApp />
          </Route>
        </Switch>
      </Router>
    </div>

  )

}

export default App;