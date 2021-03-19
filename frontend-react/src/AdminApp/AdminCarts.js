import React, { Component } from 'react';
import '../index.css';
import '../admin.css';
import '../Nav.css';
import CartInfo from './CartInfo.js';
import AddCart from './AddCart.js';

class AdminCarts extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            carts: [],
        };

    }

    
    // orderDone (id) {
    
    //         fetch("http://localhost:3000/vendor/orders/cart/3", {
    //             method: 'PUT',
    //             body: JSON.stringify({
    //                 Order_Status: "Done",
    //                 Order_Id: id,
    //             }),
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8"
    //             }
    //         }).then (response => {
    //             console.log(response);
    //             return response.json()
    //         }).then ((json) => {
    //             console.log("DB Updated?", json);
    //             this.componentDidMount();
    //         })
    
            
    // }
    componentDidMount () {
        fetch("http://localhost:3000/admin/carts")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                carts: myJson,   
            });
          
        })
    } 
    

        render() { 
            const CartList = this.state.carts.map(cart => {
                return <CartInfo key={cart.Cart_Id} cart={cart} />;

            });
            return (
                <table className = "cartTable">
                    <thead>
                        <tr>
                            <th>Cart ID</th>
                            <th>Cart Name</th>
                            <th>Cart Location</th>
                            <th>Employee ID</th>
                            <th>Available</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {CartList}
                    </tbody>
                </table>
            );
            <AddCart />
        }    
    
}  



export default AdminCarts;