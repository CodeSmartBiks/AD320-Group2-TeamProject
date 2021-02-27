import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import OrderEntry from './components/OrderEntry';
import React, { Component } from 'react';

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] }
  }

  

  componentDidMount() {
    fetch("http://localhost:3000/users/2")
      .then((results) => {
        return results.json();
      }) .then((myJson) => {
        console.log("FetchResolved", myJson);
        this.setState({
          apiResponse: myJson
        });
      })
  } 
  render () {
  return (
    <div className="App">
     <Header />
     <MainBody/>
     <OrderEntry apiResponse={this.state.apiResponse } orderid="Order #27" custname="Mike" items="App.js: Hot Dog, Coke" />
    </div>
  );
  }
}

export default App;
