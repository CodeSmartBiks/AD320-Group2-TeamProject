import React from 'react';
import { Component } from 'react';
import '../index.css';
import '../Nav.css';
import OrderTest from './OrderTest.js';
import OrderEntry from './OrderEntry.js';

 class OrdersList extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            orders: [],
        }
    }
     
    componentDidMount() {
        this.setState({
            // this is the result of pulling vendor/orders/cart/3
            orders:[
                {
                "Cart_Id": 3,
                "Total": "35.94",
                "Customer_FirstName": "Nihal",
                "Order_Date": "2021-02-13T08:00:00.000Z",
                "Order_Status": "InProgress",
                "Order_Id": 3,
                "items": "Chicago Dog(3) - 9.99 ea, Coke(3) - 1.99 ea"
                }
                ]
        });
    }

    /* componentDidMount () {
        let test = fetch("http://localhost:3000/vendor/orders/cart/3")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                orders: myJson
            });
        
        })
        console.log(this.state.orders); /* array is 0, darnit 
    } */
    

        render() {
            
        return (
            <div>
            {this.state.orders.map(order => {
                 /*return <OrderTest order={order} id={order.id} />; */

                 return <OrderEntry order={order} key={order.id} />;
            })}
        </div>
            )
        
        
             
     {/*   }         
            <div>
                <h2 className="placeholder">Incomplete Orders</h2>

         Ideally this would pull from an array of orders. while the array wasn't empty, would create an OrderEntry for each order in the array.  
                <OrderEntry orderid="44" custname="Mike" items="hot dog, coke, hunger" total="$9.00" />
            </div> 
        );   */}
        }    
    
}  



export default OrdersList;