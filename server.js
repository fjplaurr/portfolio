const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

//Consts
const app = express();
const port = process.env.PORT || 5000; //Heroku Step 1 -> process.env.PORT
const uri = process.env.ATLAS_URI;


//Mongoose connection
mongoose.connect(uri, { useNewUrlParser: true }); //Heroku Step 2 -> process.env.MONGODB_URI
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
})

//Middlewares
app.use(cors());
app.use(express.json());

//Routers
const messagesRouter = require('./routes/messages');
app.use('/', messagesRouter);

//Heroku Step 3 -> Identify if it is production and if so, build the frontend
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); //Relative path
    });
}

//Heroku Step 4 -> Created "heroku-postbuild" script in package.json

//Server listening
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});