const express = require("express");
const User = require("../models/user");

const router = new express.Router();

// Adds a new user
router.post("/add", async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		res.status(201).send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

// Login user

router.post("/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password);
		res.send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
