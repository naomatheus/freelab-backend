
// probably no longer need 

const mongoose = require('mongoose');

const checklistNoteSchema = new mongoose.Schema({
	date: String,
	body: String,
	step3: {
		linkedin: Boolean,
		brand: Boolean,
		portfolio: Boolean,
		contact: Boolean,
		referrals: Boolean,
		network: Boolean
	},
	step5: {
		price: Boolean,
		invoice: Boolean,
		accounting: Boolean,
		cms: Boolean,
		projectmgmt: Boolean
	}
})


module.exports = mongoose.model('ChecklistNote', checklistNoteSchema);

// probably no longer need 





