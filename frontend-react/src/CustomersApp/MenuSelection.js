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

  return (
    <div>
        <Header/>
        <div className="wrapper-main"></div>
        <div className="main">
                        {/*Map array to List all Cart Menu options}*/}
                        {menuList.map((menuItem)=>(
                <MenuItem key={menuItem.Menu_Id} menuItem={menuItem} addToBasket={addToBasket} />
              ))}
          </div>
          <div className="aside">
              <div className="column-cart">
            <Basket basketItems={basketItems} addToBasket={addToBasket}/></div></div>
          </div>

    )
  };
 export default MenuSelection