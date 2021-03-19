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
    

    componentDidMount () {
        let test = fetch("http://localhost:3000/vendor/carts/3")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                settings: myJson,
                checked: myJson[0].Cart_Availability,
                avail: myJson[0].Cart_Availability,
                currentLoc : myJson[0].Cart_Location,
                currentLat: myJson[0].Latitude,
                currentLng: myJson[0].Longitude
                  
            });
          
        })
    } 

    updateCart () {
        
        fetch("http://localhost:3000/vendor/carts/3", {
            
            method: 'PUT',
            body: JSON.stringify({
                Cart_Location: this.state.currentLoc,
                Cart_Availability: this.state.avail,
                Latitude: this.state.currentLat, 
                Longitude: this.state.currentLng 
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

