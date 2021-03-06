import React from 'react';
import '../index.css';
import '../Nav.css';
import OrderEntry from './OrderEntry.js';

 class OrdersList extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            orders: []
        }
    }

    componentDidMount () {
        let test = fetch("http://localhost:3000/vendor/orders/cart/3")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                orders: myJson
            });
        
        })
        console.log(this.state.orders); /* array is 0, darnit */
    }

        render() {
        return this.state.orders.map((order) => (  
            <OrderEntry orderid={order.id} custname={order.customer_id} items={order.orderitem_id} total={order.total} />
            )); 
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