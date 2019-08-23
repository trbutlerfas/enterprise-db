const express = require('express');
const Vendor = require('../models/vendor');

const router = new express.Router();

router.post('/new-vendor', async (req, res) => {
	const vendor = new Vendor(req.body);

	try {
		await vendor.save();
		res.status(201).send(vendor);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
