const router = require('express').Router();
let Message = require('../models/messages.model');

router.route('/add').post((req, res) => {
    console.log('Routing');
    const textMessage = req.body.textMessage;
    const name = req.body.name;
    const email = req.body.email;
    const newMessage = new Message({ textMessage, name, email });
    newMessage.save().then(() =>
        alert('Message added to DB.')
    ).catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;