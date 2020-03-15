
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: String,
  name: String,
  email: String,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
