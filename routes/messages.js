const router = require('express').Router();
const Message = require('../models/messages.model');

router.route('/add').post((req, res) => {
  const { textMessage, name, email } = req.body;
  const newMessage = new Message({ textMessage, name, email });
  newMessage.save().then(() => res.json('Message added to DB.')).catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
