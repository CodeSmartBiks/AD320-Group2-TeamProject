import React, { Component } from 'react';
import '../index.css';


function OrderEntry ({order}) {
    
    return (
        
        <div className="order">
            <img className="userimg" src ={`${window.location.origin}/user-icon.jpg`} />
            {/* <div className="userimg">User Img</div>{ {float: left;} */}
           
            <div className="orderdetails">
                <h3>Order # {order.Order_Id}</h3>
                <p>{order.Customer_FirstName}</p>
                <p>{order.items}{/*list all items from orderitems for order_id */}</p>
            </div>
            <div className="ordertotal"> {/* float:right*/}
                <h3>Total Due:</h3>
                <p>{order.Total}{/*total of all items in order*/}</p>
            </div>

        </div>
    );
}


export default OrderEntry;
