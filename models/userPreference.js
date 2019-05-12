const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({

	designer: {
		designerillustrator: Boolean,
		branding: Boolean,
		healthcare: Boolean,
		ecommerce: Boolean,
		retail: Boolean,
		packagedesign: Boolean,
		ux: Boolean
	}
	developer: {
		frontend: Boolean,
		backend: Boolean,
		web: Boolean,
		ui: Boolean,
		data: Boolean
	}
})


module.exports = mongoose.model('UserPreference', userPreferenceSchema);