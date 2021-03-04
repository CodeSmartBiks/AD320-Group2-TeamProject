


import '../index.css';
import '../Nav.css';
import Header from'../components/Header';
import VendorMenu from './VendorMenu';




function VendorsApp () {

    return (
        <div>
            <Header />
            <h2 className="placeholder">VendorsApp Container</h2>
            <VendorMenu />

            
        </div>
    )
}
/* The rendering didnt work for the vendor settings */
//ReactDOM.render(<VendorSettings />, document.getElementById('root'));


  
export default VendorsApp;