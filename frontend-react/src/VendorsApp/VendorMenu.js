import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CompOrderList from "../components/CompOrderList";
import OrdersList from "../components/OrdersList";
import VendorSettings from "./VendorSettings";
import MenuPanel from "./MenuPanel";


function VendorMenu () {

    return (
        <div>
            {/* Vendor Menu - React Router */}
            <Router>
            <div>
              <nav>
                <ul id="vendorMenu" className="topnav">
                  <li className="tabcontent">
                    <Link to="/vendor">Incomplete Orders</Link>
                  </li>
                  <li className="tabcontent">
                    <Link to="/vendor/PickUpReady">Ready Orders</Link>
                  </li>
                  <li className="tabcontent">
                    <Link to="/vendor/MenuSettings">Menu</Link>
                  </li>
                  <li className="tabcontent">
                    <Link to="/vendor/CartSettings">Settings</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                
                <Route path="/vendor/PickUpReady">
                <CompOrderList /> 
                </Route>

                <Route path="/vendor/MenuSettings">
                  <MenuPanel />
                </Route>

                <Route path="/vendor/CartSettings">
                  <VendorSettings />
                </Route>

                <Route path="/vendor">
                  <OrdersList />
                </Route>

              </Switch>
            </div>
            
            
          </Router>
    
        </div>
    )
}


export default VendorMenu;

{/* 
// Add active class to the current button (highlight it) 
const header = document.getElementById("vendorMenu");
const btns = header.getElementsByClassName("tabcontent");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
*/}