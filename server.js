const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const superagent = require('superagent')
/// node modules

// require DB
require('./db/db');
// require DB

// middle ware 
const PORT = 3000;

app.use(session({
	secret: 'nasndjansdlajndjlnalsd',
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
const loginController = require('./controllers/loginController')
const githubJobsController = require('./controllers/githubJobsController')

app.use('/auth', authController);
app.use('/login', loginController);
app.use('/brandStatementController', brandStatementController);
app.use('/user', userController);

// require controllers

// API // 
app.use('/api/v1/githubJobs', githubJobsController)
// API // 


/// listener

app.listen(PORT, () => {
	console.log('server listening on port', PORT);
})
