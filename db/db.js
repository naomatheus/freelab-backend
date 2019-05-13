// This is where we will set up our db connection
const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI

// freelab is the name of our database
// that is automatically created
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
}, connectionString);

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
}, connectionString);
