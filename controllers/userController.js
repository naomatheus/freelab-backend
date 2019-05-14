const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user');
const BrandStatement = require('../models/brandStatement')

/// get route for userController

/// has a get action 
router.get('/', async (req, res, next) => {
	console.log('this route should get all users');
	try {
		const allUsers = await User.find({});

		res.json({
			status: 200,
			data: allUsers,
			credentials: 'include'
		})

	} catch (err){
		console.log('there was an err');
		next(err);
	}

})
/// get route for userController


/// post route for userController 

// has the create action 
router.post('/', async (req, res, next) => {
	
	try {
		const createdUser = await User.create(req.body);

		console.log('response creating user');

		res.json({
			status: 200,
			data: createdUser,
			credentials: 'include'
		})
	} catch (err) {
		next(err)
	}
})

/// post route for userController 


/// update route for userController

// has put action
router.patch('/:id', async (req, res, next) => {
	
	try {

		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

/// THIS route will include an object(key) function that checks the values of the user document properties and updates them if the route is hit

	

//// put that here 

		res.json({
			status: 200,
			data: updatedUser,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}
})

/// update route for userController

/// delete route for userController 
// has a delete action 
router.delete('/:id', async(req, res, next) => {
	
	try {

		const deletedUser = await User.findByIdAndRemove(req.params.id);

		res.json({
			status: 200,
			data: deletedUser,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}

})

/// delete route for userController

/// route for Patching the brandStatement subdocument of User docs

router.patch('/:id/brandStatement', async (req, res, next) => {
	
	console.log('brandstatement route getting hit in the user controller');

	try {

		const createdBrandStatement = await BrandStatement.create(req.body)


		res.json({
			status: 200,
			data: createdBrandStatement,
			credentials: 'include'
		})

		const foundUser = await User.findByIdAndUpdate(req.params.id);

		console.log(createdBrandStatement, "<-- this is the createdBrandStatement");
		console.log(foundUser, '<-- this is foundUser by id ');

		foundUser.brandStatements.push(createdBrandStatement)

		console.log(foundUser, '<-- this is foundUser by ID after pushing brandstatement into subdocument');

	} catch (err){

		next(err)
	}

})




/// route for Patching the brandStatement subdocument of User docs



module.exports = router;