import OrderEntry from "./OrderEntry";

function Map(props) {
    return (
        <div className="mapimage">
            {/* <h2>CART LOCATIONS</h2> */}
            <img className="desktop" src={`${window.location.origin}/MapForCartLocation.JPG`} />
            <img className="mobile" src={`${window.location.origin}/Mobile_Map.PNG`} />
            <OrderEntry orderid="Order #27" custname="Mike" items="Map: Hot Dog, Coke"/>
        </div>
    )
}

export default Map;