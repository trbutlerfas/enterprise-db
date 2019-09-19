import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav id="sidebar">
        		<div className="sidebar-header">
            		<h3><Link to="/">Enterprise Vendors</Link></h3>
            		<strong>EV</strong>
        		</div>

        		<ul className="list-unstyled components">
					<li className="new-vendor">
						<Link to="/add" className="nav-link">New Vendor</Link>
					</li>
            		<li className="active">
			 			<Link to="/" className="nav-link">Vendor List</Link>
            		</li>
					<li className="active">
			 			<Link to="/login" className="nav-link">Login</Link>
            		</li>
					<li className="active">
			 			<Link to="/sign-up" className="nav-link">Create Account</Link>
            		</li>
        		</ul>
			</nav>
		);
	}
}
