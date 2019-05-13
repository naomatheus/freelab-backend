const express = require('express');
const router = express.Router();

const UserPreference = require('../models/userPreference');
const User = require('../models/user')

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
router.post('/:id', async (req, res, next) => {
	
	console.log('creating a set of user preferences');

	try {

		const createdUserPreference = await UserPreference.create(req.body);

		const foundUser = User.findById(req.params.id);
		console.log(createdUserPreference, '<--- 	this is createdUserPreference');

		console.log(foundUser, '<-- THIS IS FOUND USER');

		console.log(foundUser.userPrefs, "<--- this is foundUser.user prefs");

		console.log(placeForPreference, '<--this is placeForPreference');

		placeForPreference.push(createdUserPreference);


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
	// this URL needs to be edited to include the id of the user AND the id of the user preference 
	// could be /:userId/:id where :id is the userPref to be updated, and :userID is the ID of the user document
	try {

		const updatedUserPreference = await UserPreference.findByIdAndUpdate(req.params.id, req.body, {new: true})

		const updatedUser = await User.findByIdAndUpdate(req.params.id);

		console.log(updatedUserPreference, '<--- 	this is createdUserPreference');

		console.log(updatedUser, '<-- THIS IS updated USER');

		console.log(updatedUser.userPrefs, "<--- this is updated.user prefs");

		const placeForPreference = updatedUser.userPrefs

		console.log(placeForPreference, '<--this is placeForPreference');

		placeForPreference.push(updatedUserPreference);

		updatedUser.save();

		console.log(updatedUser, 'this is updated user after the push and save');

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