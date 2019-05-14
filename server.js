const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const superagent = require('superagent');
const methodOverride = require('method-override');
const bcrypt = require('bcryptjs');

// HAS SERVE STATIC
 

/// node modules

// require dot env and DB
require('dotenv').config();
require('./db/db');

// require DB

// middle ware 
const PORT = process.env.PORT;

app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}))

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json());

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: 'include',
	optionsSuccessStatus:200
}

app.use(cors(corsOptions));
// middle ware 

// Require the controller after middleware

const authController = require('./controllers/authController');
const userController  = require('./controllers/userController');
const brandStatementController = require('./controllers/brandStatementController');
// const checklistNoteController = require('./controllers/checklistNoteController')
// const loginController = require('./controllers/loginController')
const githubJobsController = require('./controllers/githubJobsController')
// const userPreferenceController = require('./controllers/userPreferenceController');


app.use('/auth', authController);
// app.use('/login', loginController);
// app.use('/brandstatement', brandStatementController);

app.use('/user', userController);
// app.use('/checklistnote', checklistNoteController);

// app.use('/userPreference', userPreferenceController);


// require controllers

// API // 
app.use('/api/v1/githubJobs', githubJobsController)
// API // 


/// listener

app.listen(PORT, () => {
	console.log('server listening on port (env)');
})
