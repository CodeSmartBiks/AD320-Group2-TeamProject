

import React from 'react';
import '../index.css';
import '../Nav.css';
import Header from'../components/Header';
import VendorMenu from './VendorMenu';



class VendorsApp extends React.Component {
 


/*componentDidMount () {
    let test = fetch("http://localhost:3000/vendor/orders/cart/2")
    .then((results) => {
        return results.json();
    }).then((myJson) => {
        console.log("FetchResolved", myJson);
        this.setState({
            orders: myJson
        });
    
    })
} */
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
/* The rendering didnt work for the vendor settings */
//ReactDOM.render(<VendorSettings />, document.getElementById('root'));


  
export default VendorsApp;