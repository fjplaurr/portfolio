const router = require('express').Router();
const Message = require('../models/messages.model');

router.route('/add').post((req, res) => {
  const { message, name, email } = req.body;
  const newMessage = new Message({ message, name, email });
  newMessage.save((error) => {
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(200).json({ status: 'ok' });
  });
});

module.exports = router;
