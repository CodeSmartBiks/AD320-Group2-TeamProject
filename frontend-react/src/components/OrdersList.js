import React from 'react';
import { Component } from 'react';
import '../index.css';
import '../Nav.css';
import OrderEntry from './OrderEntry.js';

 class OrdersList extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            orders: [],
            status: "InProgress",
        }
    }
     
   // Function setOrderDone
   //   If this.state.status = "Done", send put to db to change Order_Status in DB?
   //      onDoubleClick => this.setState({status: Done})

   //orderDone () {
       
   //}

    componentDidMount () {
        let test = fetch("http://localhost:3000/vendor/orders/cart/3?Order_Status=InProgress")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                orders: myJson,   
            });
         // Is there a way to reference part of the myJson return? myJson.Total? 
          
        })
    } 
    

        render() { 
            const OrderList = this.state.orders.map(order => {
                return <OrderEntry key={order.Order_Id} order={order}  />;
            });
            return (
                <div>
                    {OrderList}

                    {/* This is throwing errors */}
                    <h2>{this.state.orders.Total}</h2>
                </div>
            )
        }    
    
}  



export default OrdersList;