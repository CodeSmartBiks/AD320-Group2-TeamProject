import React from 'react';
import '../index.css';
import '../Nav.css';
import Header from'../components/Header';
import VendorMenu from './VendorMenu';



class VendorsApp extends React.Component {

    render() {
    return (
        <div>
            <Header />
            <h2 className="placeholder">VendorsApp Container</h2>
            <VendorMenu />

            
        </div>
    )
}
}

export default VendorsApp;