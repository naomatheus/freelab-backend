const express = require('express');
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const bcrypt = require('bcryptjs');

// require User model
const User = require('../models/user');
// require User model


router.post('/register', async (req, res, next) => {
	
	console.log('registration route being hit');
	// creates a User document in DB
	try {

		// will check to see if the username already exists
		const queriedUsername = await User.findOne({username: req.body.username});
		if (queriedUsername){
			console.log(`Username ${queriedUsername} already exists`);

			req.session.loggedIn = false;

			res.json({
				status: 200,
				data: 'username already exists and register should be prevented unless dif username',
				credentials: 'include'
			})
		} else {
			console.log('username is unique, moving on to hash the password');	
				// hash the password entered by this user
			const password = req.body.password
			const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
			// the hashed password is what we want to put in the dB

	// WHY NEED?
			// create an object for the db entry
			const userDbEntry = {};
			userDbEntry.name = req.body.name
			userDbEntry.username = req.body.username;
			userDbEntry.password = hashedPassword;
			userDbEntry.zipCode = req.body.zipCode
	// WHY NEED?

			// the properties of this object should match up with the User model
		
			const createdUser = await User.create(userDbEntry);
				// create a user 

			// const createdUser = await User.create(userDbEntry)
			// ^^ failed when I changed the create param to userDbEntry. Will include all of the other properties from the model and req.body?

			console.log(createdUser, "<-- this user was created by the registration route in auth controller");
			// will add the user's database _id to their session 
			
			// createdUser.password = hashedPassword
				// this user's password should be updated to the hashed password

			res.json({
				status: 200,
				data: createdUser,
				credentials:'include'
			})
		}

	} catch (err){
		next(err)
	}

})

/// POST Registration route for authController

/// post route for authController
/// has a post action 
router.post('/login', async (req, res, next) => {
	
	try {

		const foundUser = await User.findOne({'username':req.body.username})

		if(!foundUser){

			res.send({
				status: 200,
				data: 'this user does not exist, redirect',
				credentials: 'include'
			})

		} else if (foundUser){
			/// perform password match check
			// compare sync password returns true or false
			console.log(foundUser.password, '<-- this is foundUser from the login dB query in the login post route');

			const hashedPassword = foundUser.password;

			const passwordMatch = bcrypt.compareSync(req.body.password, hashedPassword)

			console.log(passwordMatch, '<-- this is password match');

			if (passwordMatch){
					// if the password matches
				req.session.usersDbId = foundUser._id
					// assign this user's session an ID
				req.session.username = req.body.username;
					// assign this user's entered username to the session
				req.session.loggedIn = true;
					// change loggedIn to true for this session

/// MAYBE CREATE A LOGIN MESSAGE 
				// req.session.message = 'you logged in'
/// MAYBE CREATE A LOGIN MESSAGE 

				// req.session.email = req.body.email
				// req.session.zipCode = req.body.zipCode
					// they do not need a session specific email or zipCode 

				console.log('hitting the POST /login in authController, created session');

				res.json({
					status: 200,
					data: req.session,
					credentials: 'include',
					otherData: 'log in worked',
					loginData: req.session.loggedIn
				})


				} else if (!passwordMatch){
					res.json({
						status: 202,
						data: req.session,
						credentials: 'include',
						otherData: 'the password did not match, try again'
					})
				}
		}

	} catch (err){
		next(err)
	}
})
/// post route for authController








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