const express = require('express');
const router = express.Router();


/// get route for userController

/// has a get action 
router.get('/', async (req, res, next) => {
	console.log('this route should get all users');
	try {
		const allUsers = await User.find({});

		res.json({
			status: 200,
			data: allUsers,
			credentials:'include'
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
router.put('/:id', async (req, res, next) => {
	
	try {

		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})

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

module.exports = router;