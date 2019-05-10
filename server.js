const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
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
app.use(bodyPareser.json());

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: 'include',
	optionsSuccessStatus:200
}

app.use(cors(corsOptions));
// middle ware 

// Require the controller after middleware




/// listener



app.listen(PORT, () => {
	console.log('server listening on port', PORT);
})
