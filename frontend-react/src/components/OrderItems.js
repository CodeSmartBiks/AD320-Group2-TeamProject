import React, { Component } from 'react';
function OrderEntry ({ orderid, custname, items }) {
    // const testdata = apiResponse.location;
     return (
         <div className="order">
             <img className="userimg" src ={`${window.location.origin}/user-icon.jpg`} />
             {/* <div className="userimg">User Img</div>{ {float: left;} */}
            
             <div className="orderdetails">
                 <h3>{orderid}</h3>
                 <p>{custname}</p>
                 <p>{items}{/*list all items from orderitems for order_id */}</p>
             </div>
             <div className="ordertotal"> {/* float:right*/}
                 <h3>Total Due:</h3>
                 <p>$15.43{/*total of all items in order*/}</p>
             </div>
 
         </div>
     )
 }
 
 export default OrderEntry;
