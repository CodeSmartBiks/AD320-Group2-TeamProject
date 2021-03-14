import React, { Component } from 'react';
import VendorSettings from './VendorSettings';


class VendorSettingsOption extends Component {
  constructor(props){
    super(props);

    this.state = {
      cartDetails: [],
      isCartDetailsFetched: null,
    }
  }

componentDidMount() {
    fetch("http://localhost:3000/vendor/carts/settings/3")
      .then((results) => {
        return results.json();
      }).then((myJson) => {
        console.log("FetchResolved", myJson);
        this.setState({
            cartDetails: myJson, 
          isCartDetailsFetched: true
        });
      })
  }

render() {
    const cartDetailsArray = this.state.cartDetails.map((cartColumns) =>
     <VendorSettings key={cartColumns.Cart_Id} cartItems={cartColumns}/>);
   

    return <div>{cartDetailsArray}</div>
        


}
}
export default VendorSettingsOption;
