const mongoose = require('mongoose');

const userItems = new mongoose.Schema({
  user_id: { type: Number, require: true, unique: true },
  item_id: { type: Number, require: true, unique: true, default: '' },
  item_name: { type: String },
  amount: { type: Number, default: 0 },
});

const model = mongoose.model('UsersInventory', userItems);

module.exports = model;