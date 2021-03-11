import MenuList from './MenuList.js';
import React, {Component} from 'react'
import MenuListItems from './MenuListItems'
//import MenuDetail from './MenuDetail'

class MenuPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuListItems: [],
            menuFetched:true,
            
        }
    }
render() {
    return (
        <div className='container'>
        <MenuList cartMenuListItemsArray={this.state.menuList} cart={this.state.Cart_Id}></MenuList>
        </div>
    )
    
}}

export default MenuPanel;