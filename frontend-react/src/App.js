import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import OrderEntry from './components/OrderEntry'

function App() {

  /*
  constructor(props){
    super(props);

    this.state = {
      contact: []
    }
  }

  componentDidMount() {
    let mtTestDataAPI = fetch("http://localhost:3000/testdata")
      .then((results) => {
        return results.json();
      }) .then((myJson) => {
        console.log("FetchResolved", myJson);
        this.setState({
          contacts: myJson
        });
      })
  } */
  return (
    <div className="App">
     <Header />
     <MainBody/>
     <OrderEntry orderid="Order #27" custname="Mike" items="App.js: Hot Dog, Coke" />
    </div>
  );
}

export default App;
