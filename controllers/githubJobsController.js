const express = require('express');
const router = express.Router();

const githubJob = require('../models/githubJob');
const superagent = require('superagent');
const fetch = require('node-fetch');

/// creating the route that gets jobs from the github jobs api

router.get('/', async (req, res, next) => {
	/// this calls the github jobs api and searches for freelance developer
	console.log('the jobs api route is getting hit');


	try {

		const rawJobs = await fetch('https://jobs.github.com/positions.json', {
				method: 'GET'
		})

		const allJobs = await rawJobs.json();
		console.log(allJobs);
		await res.send({
			status: 200,
			data: allJobs
		})

		


	} catch (err){
		next(err)
	}




	// superagent.get('https://jobs.github.com/positions.json?description=freelance+developer')
	// .then((data) => {
	// 	res.json({
	// 		status: 200,
	// 		data: JSON.parse(data)
	// 	})
	// }).catch((err) => {
		
	// 	res.json({
	// 		status: 400,
	// 		error: err
	// 	})
	// })
})

/// get route for githubJobsController


/// has a get action 


/// get route for githubJobsController


/// post route for githubJobsController 
router.post('/', async (req, res) => {
	
})

// has the create action 


/// post route for githubJobsController 


/// update route for githubJobsController
router.put('/', async (req, res) => {
	
})

// has put action


/// update route for githubJobsController



/// delete route for githubJobsController 
router.delete('/', async (req, res) => {
	
})

// has a delete action 


/// delete route for githubJobsController 

module.exports = router;