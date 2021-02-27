import logo from './logo.svg';
import './App.css';
import './Nav.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import React from "react";


//function App() {
export default class App extends React.Component {
  /* constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      areContactsFetched: false
    }
  }

  componentDidMount () {
    let testData = fetch("http://localhost:3000/users/")
      .then((results) => {
        return results.json();
      }).then ((myJson) => {
        console.log("FetchREsovled", myJson);
        this.setState({
          contacts: myJson,
          areContactsFetched: true
        });
      })
  } */
          
  render () {
  return (
    <div className="App">
     
      <Header />
      <MainBody/>
    </div>
  );
  }
} 



//export default App;