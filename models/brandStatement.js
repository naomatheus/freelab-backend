const mongoose = require('mongoose')

const brandStatementSchema = new mongoose.Schema({
	date: Date,
	body: String
})


module.exports = mongoose.model('BrandStatement', brandStatementSchema);