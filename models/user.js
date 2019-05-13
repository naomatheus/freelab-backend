const mongoose = require('mongoose');
const BrandStatement = require('./brandStatement')

const UserSchema = new mongoose.Schema({

	name: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	zipCode: {type: Number, required: true},
	skill: {type:String, required:false},
	email: {type: String, required:false},


	userPrefs : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'UserPreference'
	}],
	brandStatements: [BrandStatement.schema],
	checkListItems: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ChecklistNote'	
	}]

})


module.exports = mongoose.model('User', UserSchema);


const mongoose = require('mongoose');
const BrandStatement = require('./brandStatement')

const UserSchema = new mongoose.Schema({

	name: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	zipCode: {type: Number, required: true},
	skill: {type:String, required:false},
	email: {type: String, required:false},
	userPrefs : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'UserPreference'
	}],
	brandStatements: [BrandStatement.schema],
	linkedIn: {
		done: Boolean,
		notes: String
	},
	brandStatement: {
		done: Boolean,
		notes: String
	},
	linkedIn: {
		done: Boolean,
		notes: String
	},
	linkedIn: {
		done: Boolean,
		notes: String
	},
	linkedIn: {
		done: Boolean,
		notes: String
	},
	linkedIn: {
		done: Boolean,
		notes: String
	}
})


module.exports = mongoose.model('User', UserSchema);



