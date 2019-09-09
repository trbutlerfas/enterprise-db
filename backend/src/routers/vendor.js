const express = require("express");
const Vendor = require("../models/vendor");

const router = new express.Router();

// Adds a new vendor
router.post("/add", async (req, res) => {
	const vendor = new Vendor(req.body);

	try {
		await vendor.save();
		res.status(201).send(vendor);
	} catch (e) {
		res.status(400).send(e);
	}
});
// GET a list of all vendors
router.get("/", async (req, res) => {
	await Vendor.find()
		.then(vendors => res.json(vendors))
		.catch(e => res.status(500).send(e));
});
// GET a vendor by _id
router.get("/:id", async (req, res) => {
	await Vendor.findById(req.params.id)
		.then(vendor => res.json(vendor))
		.catch(err => res.status(400).json("Error: " + err));
});

router.post("/update/:id", async (req, res) => {
	await Vendor.findById(req.params.id).then(vendor => {
		vendor.companyName = req.body.companyName;
		vendor.website = req.body.website;
		vendor.street = req.body.street;
		vendor.unit = req.body.unit;
		vendor.city = req.body.city;
		vendor.state = req.body.state;
		vendor.zip = req.body.zip;
		vendor.phone = req.body.phone;
		vendor.fax = req.body.fax;
		vendor.firstName = req.body.firstName;
		vendor.lastName = req.body.lastName;
		vendor.cellPhone = req.body.cellPhone;
		vendor.email = req.body.email;
		vendor.coverageArea = req.body.coverageArea;
		vendor.crews = req.body.crews;
		vendor.bucketTrucks = req.body.bucketTrucks;
		vendor.ladderTrucks = req.body.ladderTrucks;
		vendor.cranes = req.body.cranes;
		vendor.equipment = req.body.equipment;
		vendor.hourlyRate = req.body.hourlyRate;
		vendor.insurance = req.body.insurance;
		vendor.services = req.body.services;

		vendor
			.save()
			.then(() => res.json("Vendor updated!"))
			.catch(err => res.status(400).json("Error: " + err));
	});
});

// Select a vendor by _id and delete
router.delete("/:id", async (req, res) => {
	try {
		await Vendor.findOneAndDelete({ _id: req.params.id });

		if (!vendor) {
			res.status(404).send();
		}

		res.send(vendor);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
