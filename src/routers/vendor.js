const express = require("express");
const Vendor = require("../models/vendor");

const router = new express.Router();

// Adds a new vendor
router.post("/new-vendor", async (req, res) => {
	const vendor = new Vendor(req.body);

	try {
		await vendor.save();
		res.status(201).send(vendor);
	} catch (e) {
		res.status(400).send(e);
	}
});
// Get a list of all vendors
router.get("/vendors", async (req, res) => {
	await Vendor.find({})
		.then(vendors => {
			res.send(vendors);
		})
		.catch(e => {
			res.status(500).send(e);
		});
});
// Select a vendor by _id and delete
router.delete("/vendors/:id", async (req, res) => {
	try {
		const vendor = await Vendor.findOneAndDelete({ _id: req.params.id });

		if (!vendor) {
			res.status(404).send();
		}

		res.send(vendor);
	} catch (e) {
		res.status(500).send();
	}
});

module.exports = router;
