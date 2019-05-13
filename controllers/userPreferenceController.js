const express = require('express');
const router = express.Router();

const UserPreference = require('../models/userPreference');

/// get route for userPreferenceController
/// has a get action 
router.get('/', async (req, res, next) => {

	console.log('this route should get all userPreferences');
	try {

		const allUserPreferences = await UserPreference.find({});

		res.json({
			status: 200,
			data: allUserPreferences,
			credentials:'include'
		})

	} catch (err) {
		
		next(err)
	}
})
/// get route for userPreferenceController


/// POST route for userPreferenceController
// has a create action
router.post('/', async (req, res, next) => {
	
	console.log('creating a set of user preferences');

	try {

		const createdUserPreference = await UserPreference.create(req.body);

		// const foundUser = User.findById(req.params.id);
		await console.log(createdUserPreference);
		// const placeForPreference = foundUser.userPrefs

		// placeForPreference.push(createdUserPreference);

		res.json({
			status: 200,
			data: createdUserPreference,
			credentials: 'include'
		})

	} catch (err) {
		next(err)
	}
})
/// POST route for userPreferenceController

/// PUT route for userPreferenceController

// has update action
router.put('/:id', async (req, res, next) => {
	
	try {

		const updatedUserPreference = await UserPreference.findByIdAndUpdate(req.params.id, req.body, {new: true})

		res.json({
			status: 200,
			data: updatedUserPreference,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}
})

/// PUT route for userPreferenceController

/// DELETE route for userPreferenceController 
// has a delete action 

router.delete('/:id', async(req, res, next) => {
	
	try {

		const deletedUserPreference = await UserPreference.findByIdAndRemove(req.params.id);

		res.json({
			status: 200,
			data: deletedUserPreference,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}

})

/// delete route for userPreferenceController





module.exports = router;