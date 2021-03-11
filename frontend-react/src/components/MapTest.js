import React from "react";
import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import apiKey from "../googleMapsApiKey.json";



const mapStyles = {
    height: "90vh",
    width: "90%",
    margin: "1em auto"
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

const defaultCenter = {
    lat: 47.65629189632677, lng: -122.32059609201939
}

const options = {
    disableDefaultUI: true,
    zoomControl: true
}

class MapContainer extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            carts: [],
        }
    }

    componentDidMount (){
        let test = fetch("http://localhost:3000/users/map")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                carts: myJson
            })
            console.log(this.state.carts[0].Cart_Id);
            
        })}
     
    

render() { 
    const cartMarker = this.state.carts.map(cart => {
        console.log(cart.Latitude);
        return <Marker
            key={cart.Cart_Id}
            position={{
                lat: parseFloat(cart.Latitude),
                lng: parseFloat(cart.Longitude)    
            }} 
            cart={cart}  
            />;
    });

return (
    
<div>
<LoadScript googleMapsApiKey={apiKey.key}> 
    <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={13}
        options={options}
        carts={this.state.carts}
        >
            <h2 className="maph2">Hot Dogs!<span role="img" aria-label="hotdog">🌭</span></h2>
            {cartMarker }
            {/* <Marker onLoad={onLoad} position={defaultCenter} /> */}
    </GoogleMap>
    </LoadScript>
</div>)

            }
        }
    
export default MapContainer;

