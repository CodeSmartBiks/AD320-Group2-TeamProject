import React, {useState} from 'react'
import MenuItem from './MenuItem'
//Change basket based on state, submit to POST order




function Basket ({basketItems}) {
    const basketList = basketItems.map((menuItem) =>
    
    <div key={menuItem.Menu_Id}>
      <div className="row">
        <div className="column left"><h3>{menuItem.Menu_Name}</h3></div>
        <div className="column right">{menuItem.Menu_Price}</div>
      </div>
    </div>
  );

   /* const mapp = basketItems.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
   console.info([...mapp.keys()])
   console.info([...mapp.values()])
   console.info([...mapp.entries()])
 */
   //console.log("b: " + basketItems[1].Menu_Price)
   //console.log("mk: " + Object.keys(basketItems))
   //console.log("mv: " + Object.values(basketItems))
   //console.log("me: " + Object.entries(basketItems))

   let total;

    return (
        <div>
            <h2>Your Cart</h2>
            
            {basketItems.length === 0 && <div>Cart is empty</div>}
            
            {basketItems.length > 0 && <div>Total Items: {basketItems.length}</div>}
           
            {basketList}
{}
            {/* Array of the basket items currently in selected for checkout*/}
          {/*  basketItems.map((basketItem => (
             <div>  {basketItem.Menu_Name}</div> */}
            
            

            
           
</div>
   
    )
}
export default Basket