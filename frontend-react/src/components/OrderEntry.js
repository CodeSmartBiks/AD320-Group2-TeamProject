import React, { Component } from 'react';
import '../index.css';

class OrderEntry extends Component {
/* function OrderEntry ({ orderid, custname, items, total }) { */
    constructor(props) {
        super(props);
        this.state = {
          orderid: this.props.order.Order_Id,
          items: this.props.order.items,
          name: this.props.order.Customer_FirstName,
          total: this.props.order.Total

        }
    }
    render() {
    return (
        
        <div className="order">
            <img className="userimg" src ={`${window.location.origin}/user-icon.jpg`} />
            {/* <div className="userimg">User Img</div>{ {float: left;} */}
           
            <div className="orderdetails">
                <h3>Order # {this.state.orderid}</h3>
                <p>{this.state.name}</p>
                <p>{this.state.items}{/*list all items from orderitems for order_id */}</p>
            </div>
            <div className="ordertotal"> {/* float:right*/}
                <h3>Total Due:</h3>
                <p>{this.state.total}{/*total of all items in order*/}</p>
            </div>

        </div>
    );
}
}

export default OrderEntry;
