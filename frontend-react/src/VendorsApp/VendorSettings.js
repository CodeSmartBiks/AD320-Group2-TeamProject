import '../index.css';
import Header from '../components/Header';
import React from 'react';
import './Toggle.css'



class VendorSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            settings: {},
            currentLoc: {},
            currentLat: {},
            currentLng: {},
            avail: true,
            
            

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLatEdit = this.handleLatEdit.bind(this);
        this.handleLocEdit = this.handleLocEdit.bind(this);
        this.handleLngEdit = this.handleLngEdit.bind(this);
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
                avail: myJson[0].Cart_Availability
                  
            });
          
        })
    } 

    render() {
        return (
            <div>
                <form className='container'>
                <label className='Availability'>Cart Availability</label>
                <div className='checkbox-control'>
                       <label> Cart Availability: </label>
                
                    <label className="switch1">
                        <input type="checkbox" value="avail slider" checked={this.state.checked} onChange={this.handleChange} />
                        <span className="slider"></span>
                        
                    </label>
                    </div>
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
                    <button className='btn'> Update Cart </button> 
                </form>
            </div>
        );
    }
}
export default VendorSettings;

