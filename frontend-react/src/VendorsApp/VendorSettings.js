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
                    <label className="switch1">
                        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
                        <span className="slider"></span>
                    </label>
                    <label className='Location'>Set The Location</label>
                    <label className="switch1">
                        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
                        <span className="slider"></span>
                    </label>
                    <div className='form-control'>
                <label> Longitude</label>
                <input type='text' placeholder='Enter Longitude Here'
                />
            </div>
            <div className='form-control'>
                <label> Latitude</label>
                <input type='text' placeholder='Enter Latitude Here'
                />
            </div>
                    <button className='btn'> Update Cart </button> 
                </form>
            </div>
        );
    }
}
export default VendorSettings;

