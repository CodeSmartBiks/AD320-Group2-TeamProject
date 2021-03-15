//import MenuList from './MenuList'
import '../App.css';
import '../Nav.css';
import Header from'../components/Header';
import React, {useState, useEffect} from 'react';
import MenuItem from './MenuItem';
import Basket from './Basket';



const MenuSelection = () => {
  const [menuList, setMenuList] = useState([]);
  //const [quantity, setQuantity] = useState([0]);
  //const [menuItem, setMenuItem] = useState([]);
  const [basketItems, setBasketItems] = useState([]); 

  

  useEffect(() => {
    loadMenu(); 
  }, []);

  const loadMenu = async () => {
    const response = await fetch("http://localhost:3000/users/cart/3");
    const menuList = await response.json();
    setMenuList(menuList);
    console.log("Menu Fetched!");
  }

  const addToBasket = (menuItem) => {
    setBasketItems([...basketItems, menuItem]);
  }

  const orderSend = () => {
    
    fetch("http://localhost:3000/users/newOrder/cart/3", {

        method: 'PUT',
        body: JSON.stringify({
            Quantity: quant,
            Menu_Name: basketItems[0].Menu_Name,
            Order_Total: basketItems.length * basketItems[0].Menu_Price,
            Customer_Id: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then (response => {
        console.log(response);
        return response.json()
    }).then ((json) => {
        console.log("DB Updated?", json);
        this.loadMenu();
    })

    
}
  
  let quant = basketItems.length;
  console.log(basketItems.length)
  //console.log("quant: " + quant + " " + item + " " + total);
  

  return (
    <div>
        <Header/>
        <div className="wrapper-main"></div>
        {/* <h3>Vendor: {menuList[0].Employee_FirstName}  |  Located at {menuList[0].Cart_Location}</h3> */}
        <div className="main">
        
                        {/*Map array to List all Cart Menu options}*/}
                        {menuList.map((menuItem)=>(
                <MenuItem key={menuItem.Menu_Id} menuItem={menuItem} addToBasket={addToBasket} />
              ))}
          </div>
          <div className="aside">
              <div className="column-cart">
            <Basket basketItems={basketItems} addToBasket={addToBasket}/></div></div>
            <button onClick={() =>orderSend()}>Send Order</button>
            
    </div>

  )
};
 export default MenuSelection