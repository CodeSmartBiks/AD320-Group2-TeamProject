import OrderEntry from "./OrderEntry";

function Header() {
  return (
    <header>
      <img className="logo" src={`${window.location.origin}/Hotdog_logo.jpg`} />
      <h1>HOTDOG CARTS</h1>
      <OrderEntry orderid="Order #27" custname="Mike" items="Header: Hot Dog, Coke, fries, another hot dog! wow." />
    </header>
      
  )
}

export default Header