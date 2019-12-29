/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const wakeUpDyno = require('./wakeUpDyno');

const DYNO_URL = 'https://fjplaurr-portfolio.herokuapp.com'; // the url of your dyno
const port = process.env.PORT || 5000; // Heroku Step 1 -> process.env.PORT
const uriAtlas = process.env.ATLAS_URI; // If not defined in .env, it will take it from enviorment

// Mongoose connection
mongoose.connect(uriAtlas, { useNewUrlParser: true, useUnifiedTopology: true }); // Heroku Step 2 -> connect to MongoDB
const { connection } = mongoose;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

//  Routers
const messagesRouter = require('./routes/messages');

app.use('/', messagesRouter);

// Heroku Step 3 -> Identify if it is production and if so, build the frontend
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // Relative path
});

// Heroku Step 4 -> Created "heroku-postbuild" script in package.json

// Server listening
app.listen(port, () => {
  wakeUpDyno(DYNO_URL); // will start once server starts
});
