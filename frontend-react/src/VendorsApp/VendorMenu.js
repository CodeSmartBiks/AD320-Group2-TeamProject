import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CompOrderList from "../components/CompOrderList";
import OrdersList from "../components/OrdersList";
import VendorSettings from "../components/VendorSettings";
import VendorMenuItems from "../components/VendorMenuItems";


function VendorMenu () {
    return (
        <div>
            {/* Vendor Menu - React Router */}
            <Router>
            <div>
              <nav>
                <ul className="topnav">
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
                  <VendorMenuItems />
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

