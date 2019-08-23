const mongoose = require("mongoose");

// Create the user schema
const vendorSchema = new mongoose.Schema(
	{
		company_name: {
			type: String
		},
		website: {
			type: String
		},
		street: {
			type: String
		},
		unit: {
			type: String
		},
		city: {
			type: String
		},
		state: {
			type: String
		},
		zip: {
			type: String
		},
		phone: {
			type: String
		},
		fax: {
			type: String
		},
		first_name: {
			type: String
		},
		last_name: {
			type: String
		},
		cell_phone: {
			type: String
		},
		email: {
			type: String
		},
		coverage_area: {
			type: String
		},
		crews: {
			type: Number
		},
		bucket_trucks: {
			type: Number
		},
		ladder_trucks: {
			type: Number
		},
		cranes: {
			type: Number
		},
		equipment: {
			type: String
		},
		hourly_rate: {
			type: String
		},
		insurance: {
			type: String
		},
		services: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
