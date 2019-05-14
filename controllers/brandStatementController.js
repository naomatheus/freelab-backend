const express = require('express');
const router = express.Router();

const BrandStatement = require('../models/brandStatement')
const User = require('../models/user')

/// get route for brandStatementsController
/// has a get action 
router.get('/', async (req, res, next) => {

	console.log('this route should get all brandStatements');
	try {

		const allBrandStatements = await BrandStatement.find({});

		res.json({
			status: 200,
			data: allBrandStatements,
			credentials:'include'
		})

	} catch (err) {
		
		next(err)
	}
})
/// get route for brandStatementsController

/// post route for brandStatementsController 

// has the create action 
router.post('user/:id/', async (req, res, next) => {
	
	try {

		const createdBrandStatement = await BrandStatement.create(req.body)


		res.json({
			status: 200,
			data: createdBrandStatement,
			credentials: 'include'
		})

		const foundUser = await User.findOne({'username':req.body.username})

		console.log(createdBrandStatement, "<-- this is the createdBrandStatement");
		console.log(foundUser, '<-- this is foundUser by username ');

		// foundUser.brandstatements.push(createdBrandStatement)

	} catch (err){

		next(err)
	}

})
/// post route for gbrandStatementsController 


/// update route for brandStatementsController

// has put action
router.put('/:id', async (req, res, next) => {

	try {

		const foundBrandStatement = await BrandStatement.findByIdAndUpdate(req.params.id, req.body, {new: true})

		res.json({
			status: 200,
			data: foundBrandStatement,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}
})

/// update route for brandStatementsController


/// delete route for brandStatementsController 

router.delete('/:id', async (req, res, next) => {
	// has a delete action 
	try {

		const deletedBrandStatement = await BrandStatement.findByIdAndRemove(req.params.id)

		res.json({
			status: 200,
			data: deletedBrandStatement,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}

})

/// delete route for githubJobsController 


module.exports = router;