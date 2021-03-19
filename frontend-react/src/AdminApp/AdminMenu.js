import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminCarts from './AdminCarts';
// import CompOrderList from "../components/CompOrderList";
// import OrdersList from "../components/OrdersList";
// import VendorSettings from "./VendorSettings";
// import MenuPanel from "./MenuPanel";


function AdminMenu () {
    return (
        <div>
            {/* Vendor Menu - React Router */}
            <Router>
            <div>
              <nav>
                <ul id="adminMenu" className="topnav">
                  <li className="tabcontent">
                    <Link to="/admin">Carts List</Link>
                  </li>
                  <li className="tabcontent">
                    <Link to="/admin/MenuItemInfo">Menu Item List</Link>
                  </li>
                  <li className="tabcontent">
                    <Link to="/admin/Logs">Logs</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>

                {/* <Route path="/admin/MenuItemInfo">
                  <MenuPanel />
                </Route>

                <Route path="/admin/Logs">
                  <VendorSettings />
                </Route> */}

                <Route path="/admin">
                  <AdminCarts />
                </Route>

              </Switch>
            </div>
            
            
          </Router>
    
        </div>
    )
}


export default AdminMenu;

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