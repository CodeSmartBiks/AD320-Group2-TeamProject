import '../index.css';
import Header from '../components/Header';
import React from 'react';
import './Toggle.css'



class VendorSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: props.ischecked || false,
            settings: [],
            currentLoc: "",
            currentLat: null,
            currentLng: null,
            

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLocEdit = this.handleLocEdit.bind(this);
    }
    handleChange () {
        this.setState({ isChecked: !this.state.ischecked })
    }

    handleLocEdit = this.handleLocEdit.bind(this);
    handleLocEdit (event) {
        let newLoc = this.state.currentLoc;
        newLoc[event.target.name] = event.target.value;
        this.setState({currentLoc: newLoc});
    };
    

    componentDidMount () {
        let test = fetch("http://localhost:3000/vendor//carts/3")
        .then((results) => {
            return results.json();
        }).then((myJson) => {
            console.log("FetchResolved", myJson);
            this.setState({
                settings: myJson,
                  
            });
          
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
                    <label className='Location'>Current Location</label>
                    <div className='form-control'>
                        <label> Location</label>
                        <input type='text' placeholder={this.state.settings[0] ? this.state.settings[0].Cart_Location : "fetching data..."} onChange={this.handleLocEdit}
                />
                 </div>       
                <div className='form-control'>
                    <label> Longitude</label>
                    <input type='text' placeholder={this.state.settings[0] ? this.state.settings[0].Longitude : "fetching data..."}
                    />
                </div>
            <div className='form-control'>
                <label> Latitude</label>
                <input type='text' placeholder={this.state.settings[0] ? this.state.settings[0].Latitude : "fetching data..."}
                />
            </div>
                    <button className='btn'> Update Cart </button> 
                </form>
            </div>
        );
    }
}
export default VendorSettings;

