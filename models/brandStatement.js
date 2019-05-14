const mongoose = require('mongoose')

const brandStatementSchema = new mongoose.Schema({
	date: {type: Date, default: Date.now()},
	title: String,
	body: String
})


module.exports = mongoose.model('BrandStatement', brandStatementSchema);