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
        checked: props.aval,
         
    };

    this.handleChange = this.handleChange.bind(this);
}
handleChange() {
    this.setState({ checked: !this.state.checked })
}




    render() {
      return <div>
             <form>
                <label className='MenuList'>{this.props.menuItem.Menu_Name}</label>
                    <label className="switch">
                        <input type="checkbox" value={this.state.checked} checked={this.state.checked} onChange={this.handleChange} />
                        <div className="slider"></div>
                    </label>

                    
               </form>  {/*{this.props.menuItem.Available}</h2>*/}
      </div>
    }
  
}
export default MenuListItems;