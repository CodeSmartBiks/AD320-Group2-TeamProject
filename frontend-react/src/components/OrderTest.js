import React, { Component } from "react";


class OrderTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orderid: this.props.order.Order_Id,
          items: this.props.order.items,
          name: this.props.order.Customer_FirstName,

        };
    
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>OrderNumber: {this.state.orderid}</li>
            <li>Customer: {this.state.name}</li>
            <li>Item :{this.state.items}</li>
            

            
          </ul>
        </div>
      </div>
    );
  }
}
export default OrderTest;