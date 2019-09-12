import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Vendor = (props) => (
	<tr>
		<td>{props.vendor.companyName}</td>
		<td>{props.vendor.city}</td>
		<td>{props.vendor.state}</td>
		<td>{props.vendor.firstName + ' ' + props.vendor.lastName}</td>
		<td>{props.vendor.phone}</td>
		<td>
		<Link className="btn btn-outline-primary btn-edit" to={"/edit/"+props.vendor._id}>edit</Link>

		<button  className="btn btn-outline-danger" onClick={(e) => { if (window.confirm('Are you sure you want to delete this vendor?')) props.deleteVendor(props.vendor._id) } }>
              delete
		</button>
		</td>
	</tr>
);

export default class VendorList extends Component {
	constructor(props) {
		super(props);
		this.deleteVendor = this.deleteVendor.bind(this);
		this.state = { vendors: [] };
	}
	componentDidMount() {
		axios
			.get('https://enterprise-vendors.herokuapp.com/vendors/')
			.then((response) => {
				this.setState({ vendors: response.data });
				
			})
			.catch((error) => {
				console.log(error);
			});
	}
	deleteVendor(id) {
		axios.delete('https://enterprise-vendors.herokuapp.com/vendors/' + id).then((res) => console.log(res.data));
		this.setState({
			vendors: this.state.vendors.filter((el) => el._id !== id)
		});
	}
	vendorList() {
		return this.state.vendors.map((currentvendor) => {
			return <Vendor vendor={currentvendor} deleteVendor={this.deleteVendor} key={currentvendor._id} />;
		});
	}
	render() {
		return (
			<div id="content">
				<table className="table table-striped table-bordered table-lg" id="vendorTablee">
					<thead className="thead-light">
						<tr>
							<th>Company Name</th>
							<th>City</th>
							<th>State</th>
							<th>Primary Contact</th>
							<th>Phone Number</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>{this.vendorList()}</tbody>
				</table>
			</div>
		);
	}
}
