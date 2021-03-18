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

  updateCart () {
    const updates = this.state.menuList.map    
    fetch("http://localhost:3000/vendor/cartMenus/3", {
        
        method: 'PUT',
        body: JSON.stringify({
            Available: this.state.aval,
             
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then (response => {
        console.log(response);
        return response.json()
    }).then ((json) => {
        console.log("DB Updated?", json);
        this.componentDidMount();
  })
  }

render() {
    //menu list items array, map to new array
    const cartMenuListItemsArray = this.state.menuList.map((mlItem) =>
     <MenuListItems key={mlItem.Menu_Id} menuItem={mlItem} aval={mlItem.Available} cart={mlItem.Cart_Id}/>);
   

    return <div>
      {cartMenuListItemsArray}
      <button className='btn' onClick={this.updateCart}> Update Cart </button>
      </div>
        


}
}
export default MenuList;
