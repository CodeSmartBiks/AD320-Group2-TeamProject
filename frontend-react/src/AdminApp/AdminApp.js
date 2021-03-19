import React, {Component} from 'react';
import Header from '../components/Header';
import AdminMenu from './AdminMenu';
import '../index.css';
import '../Nav.css';

class AdminApp extends Component {
    render(){
        return (
            <div>
                <Header />
                <h2 className="placeholder">AdminApp Container</h2>
                <AdminMenu />
            </div>
        )
    }
}

export default AdminApp;