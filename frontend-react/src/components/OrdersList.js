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
        };

        //this.orderDone = this.orderDone.bind(this);
    }
     
   // Function setOrderDone
   //   If this.state.status = "Done", send put to db to change Order_Status in DB?
   //      onDoubleClick => this.setState({status: Done})
    
    orderDone (id) {
    /* 
       this.setState({
        status: "Done"
        });
    } else {
        this.setState({
            status: "InProgress"
        });
    // }  */      
            fetch("http://localhost:3000/vendor/orders/cart/3", {
                method: 'PUT',
                body: JSON.stringify({
                    Order_Status: "Done",
                    Order_Id: id,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then (response => {
                console.log(response);
                return response.json()
            }).then ((json) => {
                console.log("DB Updated?", json);
                this.componentDidMount();
            })
    
            
    }
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
                return <OrderEntry key={order.Order_Id} order={order} orderDone={this.orderDone.bind(this)} />;
                //assuming this even works-->would "orderDone" be passed as a prop to OrderEntry? 
                //  adding DoubleClick functionality there...?
            });
            return (
                <div>
                    {OrderList}

                    {/* This is throwing errors */}
                </div>
            )
        }    
    
}  



export default OrdersList;