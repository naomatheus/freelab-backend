const mongoose = require('mongoose');

const checklistNoteSchema = new mongoose.Schema({
	date: Date,
	body: String
})


module.exports = mongoose.model('ChecklistNote', checklistNoteSchema);

