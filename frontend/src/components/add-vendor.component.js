import React, { Component } from 'react';
import axios from 'axios';

export default class AddVendor extends Component {
	constructor(props) {
		super(props);

		this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
		this.onChangeWebsite = this.onChangeWebsite.bind(this);
		this.onChangeStreet = this.onChangeStreet.bind(this);
		this.onChangeUnit = this.onChangeUnit.bind(this);
		this.onChangeCity = this.onChangeCity.bind(this);
		this.onChangeState = this.onChangeState.bind(this);
		this.onChangeZipCode = this.onChangeZipCode.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeFax = this.onChangeFax.bind(this);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeCellPhone = this.onChangeCellPhone.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeCoverageArea = this.onChangeCoverageArea.bind(this);
		this.onChangeCrews = this.onChangeCrews.bind(this);
		this.onChangeBucketTrucks = this.onChangeBucketTrucks.bind(this);
		this.onChangeLadderTrucks = this.onChangeLadderTrucks.bind(this);
		this.onChangeCranes = this.onChangeCranes.bind(this);
		this.onChangeEquipment = this.onChangeEquipment.bind(this);
		this.onChangeHourlyRate = this.onChangeHourlyRate.bind(this);
		this.onChangeInsurance = this.onChangeInsurance.bind(this);
		this.onChangeServices = this.onChangeServices.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			companyName: '',
			website: '',
			street: '',
			unit: '',
			city: '',
			state: '',
			zip: '',
			phone: '',
			fax: '',
			firstName: '',
			lastName: '',
			cellPhone: '',
			email: '',
			coverageArea: '',
			crews: 0,
			bucketTrucks: 0,
			ladderTrucks: 0,
			cranes: 0,
			equipment: '',
			hourlyRate: '',
			insurance: '',
			services: ''
		};
	}

	onChangeCompanyName(e) {
		this.setState({
			companyName: e.target.value
		});
	}

	onChangeWebsite(e) {
		this.setState({
			website: e.target.value
		});
	}

	onChangeStreet(e) {
		this.setState({
			street: e.target.value
		});
	}
	onChangeUnit(e) {
		this.setState({
			unit: e.target.value
		});
	}

	onChangeCity(e) {
		this.setState({
			city: e.target.value
		});
	}
	onChangeState(e) {
		this.setState({
			state: e.target.value
		});
	}

	onChangeZipCode(e) {
		this.setState({
			zip: e.target.value
		});
	}

	onChangePhone(e) {
		this.setState({
			phone: e.target.value
		});
	}

	onChangeFax(e) {
		this.setState({
			fax: e.target.value
		});
	}

	onChangeFirstName(e) {
		this.setState({
			firstName: e.target.value
		});
	}

	onChangeLastName(e) {
		this.setState({
			lastName: e.target.value
		});
	}
	onChangeCellPhone(e) {
		this.setState({
			cellPhone: e.target.value
		});
	}
	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	onChangeCoverageArea(e) {
		this.setState({
			coverageArea: e.target.value
		});
	}
	onChangeCrews(e) {
		this.setState({
			crews: e.target.value
		});
	}

	onChangeBucketTrucks(e) {
		this.setState({
			bucketTrucks: e.target.value
		});
	}
	onChangeLadderTrucks(e) {
		this.setState({
			ladderTrucks: e.target.value
		});
	}
	onChangeCranes(e) {
		this.setState({
			cranes: e.target.value
		});
	}

	onChangeEquipment(e) {
		this.setState({
			equipment: e.target.value
		});
	}

	onChangeHourlyRate(e) {
		this.setState({
			hourlyRate: e.target.value
		});
	}

	onChangeInsurance(e) {
		this.setState({
			insurance: e.target.value
		});
	}

	onChangeServices(e) {
		this.setState({
			services: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const vendor = {
			companyName: this.state.companyName,
			website: this.state.website,
			street: this.state.street,
			unit: this.state.unit,
			city: this.state.city,
			state: this.state.state,
			zip: this.state.zip,
			phone: this.state.phone,
			fax: this.state.fax,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			cellPhone: this.state.cellPhone,
			email: this.state.email,
			coverageArea: this.state.coverageArea,
			crews: this.state.crews,
			bucketTrucks: this.state.bucketTrucks,
			ladderTrucks: this.state.ladderTrucks,
			cranes: this.state.cranes,
			equipment: this.state.equipment,
			hourlyRate: this.state.hourlyRate,
			insurance: this.state.insurance,
			services: this.state.services
		};
		console.log(vendor);
		axios.post('https://enterprise-vendors.herokuapp.com/vendors/add', vendor).then((res) => console.log(res.data));

		window.location = '/';
	}

	render() {
		return (
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-lg-8">
						<form onSubmit={this.onSubmit}>
							<div className="container">
								<h2 className="form-section-header">Company Info</h2>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Company Name</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="ABC Sign Company"
												value={this.state.companyName}
												onChange={this.onChangeCompanyName}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Website</label>
											<input
												type="text"
												className="form-control"
												placeholder="https://abcsigns.com"
												value={this.state.website}
												onChange={this.onChangeWebsite}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Street</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="638 Main St."
												value={this.state.street}
												onChange={this.onChangeStreet}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Suite, Unit, Building</label>
											<input
												type="text"
												className="form-control"
												placeholder="Suite B"
												value={this.state.unit}
												onChange={this.onChangeUnit}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-4">
										<div className="form-group">
											<label>City</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="Phoenixville"
												value={this.state.city}
												onChange={this.onChangeCity}
											/>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="form-group">
											<label>State</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="PA"
												value={this.state.state}
												onChange={this.onChangeState}
											/>
										</div>
									</div>
									<div className="col-lg-4">
										<div className="form-group">
											<label>Zip Code</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="19460"
												value={this.state.zip}
												onChange={this.onChangeZipCode}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Company Phone</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="(555) 555-5555"
												value={this.state.phone}
												onChange={this.onChangePhone}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Company Fax</label>
											<input
												type="text"
												className="form-control"
												placeholder="(555) 555-5555"
												value={this.state.fax}
												onChange={this.onChangeFax}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Primary Contact First Name</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="John"
												value={this.state.firstName}
												onChange={this.onChangeFirstName}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Primary Contact Last Name</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="Smith"
												value={this.state.lastName}
												onChange={this.onChangeLastName}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Primary Contact Cell Phone</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="(555) 555-5555"
												value={this.state.cellPhone}
												onChange={this.onChangeCellPhone}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Primary Contact Email</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="jsmith@abcsigns.com"
												value={this.state.email}
												onChange={this.onChangeEmail}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<h2 className="form-section-header">Capabilities</h2>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<label>Coverage Area</label>
											<textarea
												required
												className="form-control"
												placeholder="Philadelphia and surrounding suburbs"
												value={this.state.coverageArea}
												onChange={this.onChangeCoverageArea}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-3">
										<div className="form-group">
											<label>No. Crews</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="4"
												value={this.state.crews}
												onChange={this.onChangeCrews}
											/>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="form-group">
											<label>No. Bucket Trucks</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="3"
												value={this.state.bucketTrucks}
												onChange={this.onChangeBucketTrucks}
											/>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="form-group">
											<label>No. Ladder Trucks</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="2"
												value={this.state.ladderTrucks}
												onChange={this.onChangeLadderTrucks}
											/>
										</div>
									</div>
									<div className="col-lg-3">
										<div className="form-group">
											<label>No. Cranes</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="1"
												value={this.state.cranes}
												onChange={this.onChangeCranes}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<label>Other Equipment</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="Sign making equipment"
												value={this.state.equipment}
												onChange={this.onChangeEquipment}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<label>Hourly Rate</label>
											<input
												type="text"
												required
												className="form-control"
												placeholder="$88/hour"
												value={this.state.hourlyRate}
												onChange={this.onChangeHourlyRate}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<label>Insurance Coverage</label>
											<select
												required
												className="form-control"
												value={this.state.insurance}
												onChange={this.onChangeInsurance}
											>
												<option>-- select an option --</option>
												<option>$500,000 - $999,999</option>
												<option>$1,000,000 - $1,999,999</option>
												<option>$2,000,000 +</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group">
											<label>Services Offered</label>
											<textarea
												type="text"
												required
												className="form-control"
												placeholder="Full service sign manufacturing and repair"
												value={this.state.services}
												onChange={this.onChangeServices}
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="form-group">
								<input type="submit" value="Save New Vendor" className="btn btn-primary btn-block btn-lg" />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
