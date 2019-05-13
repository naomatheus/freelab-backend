const express = require('express');
const router = express.Router();

// require User model
const User = require('../models/user');
// require User model

/// get route for authController


/// has a get action 
router.get('/login', async (req, res, next) => {
	
	console.log('hitting login get route ');

	res.json({
		status: 200,
		data: 'here is the login get route'
	})


})

/// get route for authController


/// post login route for authController 
router.post('/login', async (req, res) => {

	req.session.username = req.body.username;
	req.session.password = req.body.password
	req.session.email = req.body.email
	req.session.zipCode = req.body.zipCode
	req.session.loggedIn = true;

	console.log('hitting the POST /login in authController, created session');

	res.json({
		status: 200,
		data: req.session,
		credentials: 'include',
		otherData: 'log in worked'
	})

	// res.redirect('/');

	// will most likely redirect to user/:userID <-- step 1 page
})
/// post login route for authController 

/// POST Registration route for authController
// has a create action

router.post('/register', async (req, res, next) => {
	
	console.log('registration route being hit');

	// will check to see if the username already exists
	const queriedUsername = await User.findOne({username: req.body.username});
	if (queriedUsername){
		console.log(`Username ${queriedUsername} already exists`);

		req.session.loggedIn = false;

		res.json({
			status: 200,
			data: 'username already exists and login should be prevented',
			credentials: 'include'
		})
	} else {
		console.log('moving on to try block');	
	}

	try {

		const createdUser = await User.create(req.body);

		console.log(createdUser, "<-- this user was created by the registration route in auth controller");
		// will add the user's database _id to their session 
		req.session.usersDbId = createdUser._id

		console.log(req.session, '<-- this session should have database Id appended');

		res.json({
			status: 200,
			data: createdUser,
			credentials:'include'
		})

	} catch (err){
		next(err)
	}

})

/// POST Registration route for authController

/// GET Logout route for authController

// destroys the user session/ends the session

router.get('/logout', (req, res, next) => {
	
	req.session.destroy((err) => {
		
		if(err){
			res.json({
				status: 400,
				data: err,
				credentials: 'include',
				message: 'there was an issue with logout'
			})
		} else {
			res.json({
				status: 200,
				data: 'logout successful',
				credentials: 'include'
			})
		}
	})


})



/// GET Logout route for authController


/// update route for authController

router.put('/', async (req, res) => {
	
})
// has put action


/// update route for authController


/// delete route for authController 

// has a delete action
router.delete('/', async (req, res) => {
	
})

/// delete route for authController 

module.exports = router;