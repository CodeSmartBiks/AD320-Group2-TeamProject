import React from 'react';

const MenuItem = ({menuItem, addToBasket, removeFromBasket, Quantity}) => {
    return(
  
      <div className="row">
        <div className="column left">  
          <h2>{menuItem.Menu_Name} ${menuItem.Menu_Price} </h2>
          {menuItem.Menu_Description}</div>
          <div className="column right"><button onClick={() => removeFromBasket(menuItem.Menu_Name)}>-</button>
          <button onClick={() => addToBasket(menuItem)}>+</button></div>
          </div>
          
);
}

export default MenuItem;