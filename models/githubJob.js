const mongoose = require('mongoose');

const githubJobSchema = new mongoose.Schema({
	title: String
})


module.exports = mongoose.model('GithubJob', githubJobSchema);

