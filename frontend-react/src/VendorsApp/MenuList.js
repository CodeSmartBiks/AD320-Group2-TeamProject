import React, { Component } from 'react';
import MenuListItems from './MenuListItems';


class MenuList extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuList: [],
    }
  }

/*
- Container for all menu list
*/ 
componentDidMount() {
    fetch("http://localhost:3000/vendor/menus/cart/3")
      .then((results) => {
        return results.json();
      }).then((myJson) => {
        console.log("FetchResolved", myJson);
        this.setState({
          menuList: myJson, 
          isCartMenuFetched: true
        });
      })
  }

render() {
    //menu list items array, map to new array
    const cartMenuListItemsArray = this.state.menuList.map((mlItem) =>
     <MenuListItems key={mlItem.Menu_Id} menuItem={mlItem} aval={mlItem.Available} cart={mlItem.Cart_Id}/>);
   

    return <div>{cartMenuListItemsArray}</div>
        


}
}
export default MenuList;
