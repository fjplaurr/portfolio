const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const messagesRouter = require('./routes/messages');

dotenv.config();
const port = process.env.PORT || 5000;
const uriAtlas = process.env.ATLAS_URI;

// Mongoose connection
mongoose.connect(uriAtlas, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));

//  Routers
app.use('/', messagesRouter);

// Server listening
app.listen(port);
