const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

	name: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	zipCode: {type: Number, required: true},
	skill: String,
	industry: String,
	email: String,
	userPrefs : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'UserPreference'
	}],
	statements: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'BrandStatement'
	}]
})


module.exports = mongoose.model('User', UserSchema);