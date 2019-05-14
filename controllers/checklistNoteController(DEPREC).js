const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ChecklistNote = require('../models/checklistNote')

/// get route for checklistNoteController

/// has a get action 
router.get('/', async (req, res, next) => {
	console.log('this route should get all checklist notes');
	try {
		const allchecklistNotes = await ChecklistNote.find({});

		res.json({
			status: 200,
			data: allchecklistNotes,
			credentials:'include'
		})

	} catch (err){
		console.log('there was an err');
		next(err);
	}

})
/// get route for checklistNoteController

/// post route for checklistNoteController 
// has the create action 
router.post('/', async (req, res, next) => {
	
	try {
		const createdChecklistNote = await ChecklistNote.create(req.body);

		console.log('response creating checklistNote');

		res.json({
			status: 200,
			data: createdChecklistNote,
			credentials: 'include'
		})
	} catch (err) {
		next(err)
	}
})
/// post route for checklistNoteController 

/// update route for checklistNoteController

// has put action
router.put('/:id', async (req, res, next) => {
	
	try {

		const updatedChecklistNote = await ChecklistNote.findByIdAndUpdate(req.params.id, req.body, {new: true})

		res.json({
			status: 200,
			data: updatedChecklistNote,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}
})
/// update route for checklistNoteController

/// delete route for userController 
// has a delete action 
router.delete('/:id', async(req, res, next) => {
	
	try {

		const deletedChecklistNote = await ChecklistNote.findByIdAndRemove(req.params.id);

		res.json({
			status: 200,
			data: deletedChecklistNote,
			credentials: 'include'
		})

	} catch (err){
		next(err)
	}

})

/// delete route for userController



module.exports = router;