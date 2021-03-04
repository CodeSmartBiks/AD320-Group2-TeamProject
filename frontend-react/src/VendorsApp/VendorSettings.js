import '../index.css';
import Header from '../components/Header';
import React from 'react';
import './Toggle.css'

class VendorSettings extends React.Component {
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
        return (
            <div>
                <form className='container'>
                <label className='Availability'>Cart Availability</label>
                    <label className="switch">
                        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
                        <div className="slider"></div>
                    </label>
                    <label className='Location'>Set The Location</label>
                    <button className='btn'> Update Cart </button> 
                </form>
            </div>
        );
    }
}
export default VendorSettings;

