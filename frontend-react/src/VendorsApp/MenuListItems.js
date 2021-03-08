import React, {Component} from 'react';

/*
MenuList
  --MenuListItem
    -- Menu_name
      -- handlechange: toggle 
*/

class MenuListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isChecked: props.isChecked || false,
    };

    this.handleChange = this.handleChange.bind(this);
}
handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
}
    render() {
      return <div>
             <form>
                <label className='MenuList'>{this.props.menuItem.Menu_Name}</label>
                    <label className="switch">
                        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
                        <div className="slider"></div>
                    </label>
                </form>{/*{this.props.menuItem.Available}</h2>*/}
      </div>
    }
  
}
export default MenuListItems;