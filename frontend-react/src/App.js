import logo from './logo.svg';
import './App.css';
import './Nav.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import React from "react";


function App() {
  return (
    <div className="App">
     <Header />
     <MainBody/>
    </div>
  );
} 



export default App;