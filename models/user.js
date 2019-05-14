// new Flattened model
const mongoose = require('mongoose');
const BrandStatement = require('../models/brandStatement')

const UserSchema = new mongoose.Schema({

	name: {type: String, required: true},
	username: {type: String, required: true},
	password: {type: String, required: true},
	zipCode: {type: Number, required: true},
	// skill: {type:String, required:false},
	email: {type: String, required:false},

	// userPrefs : [{
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'UserPreference'
	// }],

	brandStatements: [BrandStatement.schema],
	
	brandStatement: {
		check: Boolean,
		notes: String
	},
// Step 1 user preference items //

	designerillustrator: 
	{ 
		check: Boolean,
		notes: String
	},
	branding: {
		check:Boolean,
		notes: String
	},
	ecommerce: {
		check: Boolean,
		notes: String
	},
	retail: {
		check: Boolean,
		notes: String
	},
	packagedesign: {
		check: Boolean,
		notes: String
	},
	ux: {
		check: Boolean,
		notes: String
	},
	frontend: {
		check: Boolean,
		notes: String
	},
	backend: {
		check: Boolean,
		notes: String
	},
	web: {
		check: Boolean,
		notes: String
	},
	ui: {
		check: Boolean,
		notes: String
	},
	data: {
		check: Boolean,
		notes: String
	},
	healthcare: {
		check: Boolean,
		notes: String
	},

// Step 1 user preference items //

// Step 2 BIZ TYPE ITEMS // 

	bizType: {
		type: String,
		enum: ['LLC','S Corp', 'DBA', 'Sole Proprietor']
	},
// Step 2 BIZ TYPE ITEMS // 


// STEP 3 CHECKLIST ITEMS //
	linkedIn: {
		check: Boolean,
		notes: String
	},
	brand: {
		check: Boolean,
		notes: String
	},
	portfolio: {
		check: Boolean,
		notes: String
	},
	referrals: {
		check: Boolean,
		notes: String
	},
	network: {
		done: Boolean,
		notes: String
	},
// STEP 3 CHECKLIST ITEMS //

//STEP 5 CHECKLIST ITEMS //
	price: {
		check: Boolean,
		notes: String
	},
	invoice: {
		check: Boolean,
		notes: String
	},
	accounting: {
		check: Boolean,
		notes: String
	},
	cms: {
		check: Boolean,
		notes: String
	},
	projectmgmt: {
		check: Boolean,
		notes: String
	}
//STEP 5 CHECKLIST ITEMS //
})


module.exports = mongoose.model('User', UserSchema);
// new Flattened model


// OLD MODEL //
// const mongoose = require('mongoose');
// const BrandStatement = require('./brandStatement')

// const UserSchema = new mongoose.Schema({

// 	name: {type: String, required: true},
// 	username: {type: String, required: true},
// 	password: {type: String, required: true},
// 	zipCode: {type: Number, required: true},
// 	skill: {type:String, required:false},
// 	email: {type: String, required:false},


// 	userPrefs : [{
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'UserPreference'
// 	}],
// 	brandStatements: [BrandStatement.schema],
// 	checkListItems: [{
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'ChecklistNote'	
// 	}]

// })


// module.exports = mongoose.model('User', UserSchema);
// OLD MODEL //


