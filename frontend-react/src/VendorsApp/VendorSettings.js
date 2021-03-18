import '../index.css';
import Header from '../components/Header';
import React from 'react';
import './Toggle.css'



class VendorSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 1,
            settings: {},
            currentLoc: {},
            currentLat: {},
            currentLng: {},
            avail: 1,
            
            

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLatEdit = this.handleLatEdit.bind(this);
        this.handleLocEdit = this.handleLocEdit.bind(this);
        this.handleLngEdit = this.handleLngEdit.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }
    handleChange () {
        this.setState({ checked: !this.state.checked, avail: !this.state.avail })
        
    }

    
    handleLatEdit (event) {
        let newLat = this.state.currentLat;
        newLat[event.target.name] = event.target.value;
        this.setState({currentLat: newLat});
    };

    handleLocEdit (event) {
        let newLoc = this.state.currentLoc;
        newLoc[event.target.name] = event.target.value;
        this.setState({currentLoc: newLoc});
    };

    handleLngEdit (event) {
        let newLng = this.state.currentLng;
        newLng[event.target.name] = event.target.value;
        this.setState({currentLng: newLng});
    };
    

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
                /*currentLoc : myJson[0].Cart_Location,
                currentLat: myJson[0].Latitude,
                currentLng: myJson[0].Longitude */
                  
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
                        <input type="checkbox" value="avail slider" checked={this.state.checked} onChange={this.handleChange} />
                        <span className="slider"></span>
                        
                    </label>
                    
                    <label className='Location'>Current Location</label>
                
                   

                    <div className='form-control'>
                        <label> Location</label>
                        <input type='text' placeholder={this.state.settings[0] ? this.state.settings[0].Cart_Location : "fetching data..."} onChange={this.handleLocEdit} 
                />
                 </div>       
                <div className='form-control'>
                    <label> Longitude</label>
                    <input type='text' placeholder={this.state.settings[0] ? this.state.settings[0].Longitude : "fetching data..."} onChange={this.handleLngEdit}
                    />
                </div>
            <div className='form-control'>
                <label> Latitude</label>
                <input type='text' placeholder={this.state.settings[0] ? this.state.settings[0].Latitude : "fetching data..."} onChange={this.handleLatEdit}
                />
            </div>
                    <button className='btn' onClick={this.updateCart}> Update Cart </button> 
                </form>
            </div>
        );
    }
}
export default VendorSettings;

