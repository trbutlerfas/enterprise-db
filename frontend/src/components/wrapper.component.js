import React, { Component } from 'react';
import Navbar from './navbar.component';
import AddVendor from './add-vendor.component';
import VendorList from './vendors-list.component';
import EditVendor from './edit-vendor.component';
import LoginUser from './user-login-component'
import CreateUser from './add-user.component'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Wrapper extends Component {
	render() {
		return (
			<div className="wrapper">
				<Router>
					<Navbar />
					<Route path="/" exact component={VendorList} />
					<Route path="/edit/:id" exact component={EditVendor} />
					<Route path="/add/" exact component={AddVendor} />
					<Route path="/login/" exact component={LoginUser} />
					<Route path="/sign-up/" exact component={CreateUser} />
				</Router>
			</div>
		);
	}
}
