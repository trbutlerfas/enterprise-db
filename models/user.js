const mongoose = require("mongoose");

// Create the user schema
const userSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true
		},

		lastName: {
			type: String,
			required: true,
			trim: true
		},

		email: {
			type: String,
			required: true,
			trim: true
		},

		password: {
			type: String,
			required: true,
			trim: true
		},
		isLoggedIn: {
			type: Boolean,
			default: false
		}
	},
	{
		timestamps: true
	}
);

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("That user does not exist");
	}

	const isMatch = await User.findOne({ password });
	if (!isMatch) {
		throw new Error("Password is incorrect");
	}

	return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
