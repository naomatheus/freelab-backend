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


module.exports = router;