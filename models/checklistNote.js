const mongoose = require('mongoose');

const checklistNoteSchema = new mongoose.Schema({
	date: String,
	body: String
})


module.exports = mongoose.model('ChecklistNote', checklistNoteSchema);

