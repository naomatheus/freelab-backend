const mongoose = require('mongoose')

const brandStatementSchema = new mongoose.Schema({
	date: String,
	title: String,
	body: String
})


module.exports = mongoose.model('BrandStatement', brandStatementSchema);