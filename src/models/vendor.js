const mongoose = require('mongoose');

// Create the user schema
const vendorSchema = new mongoose.Schema(
	{
		companyName: {
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
		firstName: {
			type: String
		},
		lastName: {
			type: String
		},
		cellPhone: {
			type: String
		},
		email: {
			type: String
		},
		coverageArea: {
			type: String
		},
		crews: {
			type: Number
		},
		bucketTrucks: {
			type: Number
		},
		ladderTrucks: {
			type: Number
		},
		cranes: {
			type: Number
		},
		equipment: {
			type: String
		},
		hourlyRate: {
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

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
