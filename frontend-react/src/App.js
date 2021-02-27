import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import OrderEntry from './components/OrderEntry';
import React, { Component } from 'react';

/* class App extends React.Component { */
  function App() {
  /* render () { */
  return (
    <div className="App">
     <Header />
     <MainBody/>
     <OrderEntry orderid="Order #27" custname="Mike" items="App.js: Hot Dog, Coke, fries, another hot dog! wow." />
    </div>
  );
  /*} */
}

export default App;
