// import React from 'react';
// import ReactDOM from 'react-dom';
// import VendorSettings from './VendorSettings'

import '../index.css';
import '../Nav.css';
import Header from'../components/Header';
import VendorMenu from './VendorMenu';
import MenuList from './MenuList';
import React, { Component } from 'react';
import MenuDetail from './MenuDetail';
import MenuPanel from './MenuPanel';
import './Toggle.css'

//function VendorsApp() {

class VendorsApp extends React.Component {
    constructor(props){
    super(props);
    }


    render() {
    return (
        <div>
            <Header />
            <MenuPanel/>                    
        </div>
    );
}
}
export default VendorsApp;