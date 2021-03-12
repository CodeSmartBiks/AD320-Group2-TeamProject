import React from 'react';
import { Component } from 'react';
import '../index.css';
import '../Nav.css';
import OrderTest from './OrderTest.js';
import OrderEntry from './OrderEntry.js';

 class CompOrderList extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            orders: [],
        };

    }

    
    orderDone (id) {
       
            fetch("http://localhost:3000/vendor/orders/cart/3", {
                method: 'PUT',
                body: JSON.stringify({
                    Order_Status: "InProgress",
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
        let test = fetch("http://localhost:3000/vendor/orders/cart/3?Order_Status=Done")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                orders: myJson
            });
        })
    } 
    

        render() {
            const OrderList = this.state.orders.map(order => {

                return <OrderEntry key={order.Order_Id} order={order} orderDone={this.orderDone.bind(this)} />;
            });
        return (
            <div className="completed">
                {OrderList}
            </div>
            )  
             
     
            
        }    
    
}  


export default CompOrderList;