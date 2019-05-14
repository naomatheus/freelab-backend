/// MAY NO LONGER NEED 

const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({


	name: String /*will eventually be the assigned user*/,
	designer: {
		designerillustrator: Boolean,
		branding: Boolean,
		healthcare: Boolean,
		ecommerce: Boolean,
		retail: Boolean,
		packagedesign: Boolean,
		ux: Boolean
	},
	developer: {
		frontend: Boolean,
		backend: Boolean,
		web: Boolean,
		ui: Boolean,
		data: Boolean
	},
	// enum --- 


	bizType: {
		type: String,
		enum: ['LLC', 'S Corp', 'DBA', 'Sole Proprietor']
		// llc: Boolean,
		// scorp: Boolean,
		// dba: Boolean,
		// soleproprietor: Boolean
	}
})


module.exports = mongoose.model('UserPreference', userPreferenceSchema);

/// MAY NO LONGER NEED 
