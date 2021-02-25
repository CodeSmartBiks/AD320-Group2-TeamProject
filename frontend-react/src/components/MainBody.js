import React, { Component } from 'react';
import Map from "./Map";
import OrderEntry from "./OrderEntry";

function MainBody () {
/* class App extends React.Component { */
    
        return (
            <div>
                <Map/>
                <OrderEntry orderid="Order #27" custname="Mike" items="Hot Dog, Coke" />
            </div>

        )
}

export default Map;
