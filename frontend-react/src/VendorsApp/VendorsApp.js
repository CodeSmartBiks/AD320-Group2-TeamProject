
//import React from 'react';
import ReactDOM from 'react-dom';

import '../index.css';
import '../Nav.css';
import Header from'../components/Header';
import VendorMenu from './VendorMenu';




function VendorsApp () {

    return (
        <div>
            <Header />
            <h2 className="placeholder">VendorsApp Container</h2>
            <VendorMenu />

            
        </div>
    )
}


  
export default VendorsApp;