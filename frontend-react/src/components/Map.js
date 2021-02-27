import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import apiKey from "../googleMapsApiKey.json";

const Map = () => {

    const mapStyles = {
        height: "100vh",
        width: "100%"};

    const defaultCenter = {
        lat: 47.65629189632677, lng: -122.32059609201939
    }
    


    return (
        <LoadScript
         googleMapsApiKey={apiKey.key}>
            <GoogleMap
             mapContainerStyle={mapStyles}
             zoom={13}
             center={defaultCenter}
            />
        </LoadScript>
    )
}

// function Map(props) {
//     return (
//         <div className="mapimage">
//             {/* <h2>CART LOCATIONS</h2> */}
//             <img className="desktop" src={`${window.location.origin}/MapForCartLocation.JPG`} />
//             <img className="mobile" src={`${window.location.origin}/Mobile_Map.PNG`} />
//         </div>
//     )
// }

export default Map;