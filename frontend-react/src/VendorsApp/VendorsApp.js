// import React from 'react';
// import ReactDOM from 'react-dom';
// import VendorSettings from './VendorSettings'

import '../index.css';
import '../Nav.css';
import Header from'../components/Header';

function VendorsApp () {

    return (
        <div>
            <Header />
            <h2 className="placeholder">VendorsApp Container</h2>
        </div>
    )
}
/* The rendering didnt work for the vendor settings */
//ReactDOM.render(<VendorSettings />, document.getElementById('root'));

export default VendorsApp;