import React, { Component } from 'react';
import '../index.css';


function CartInfo ({cart}) {
    
    return (            
            <tr>
                <td>{cart.Cart_Id}</td>
                <td>{cart.Cart_Name}</td>
                <td>{cart.Cart_Location}</td>
                <td>{cart.Employee_Id}</td>
                <td>{cart.Cart_Availability}</td>
            </tr>
    );
}

export default CartInfo;