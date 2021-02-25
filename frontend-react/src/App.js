import logo from './logo.svg';
import './App.css';
import Header from'./components/Header';
import MainBody from './components/MainBody';
import OrderEntry from './components/OrderEntry'

function App() {
  return (
    <div className="App">
     <Header />
     <MainBody/>
     <OrderEntry orderid="Order #27" custname="Mike" items="App.js: Hot Dog, Coke" />
    </div>
  );
}

export default App;
