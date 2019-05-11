const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

	name: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	zipCode: {type: Number, required: true},
	skill: String,
	industry: String,
	email: String,
	userPrefs :String /*{Actually will be another model}*/,
	statements: String
})


module.exports = mongoose.model('User', UserSchema);