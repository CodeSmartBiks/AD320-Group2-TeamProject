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
     
   // Function setOrderDone

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
                /*return <OrderTest order={order} id={order.id} />; */

                return <OrderEntry key={order.Order_Id} order={order}  />;
            });
        return (
            <div>
                {OrderList}
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