const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  boardImage: { type: String, required: true },
  size_ft: { type: Number, required: true },
  size_inch: { type: Number, required: true },
  shape: { type: String, required: true },
  shape: { type: Number, required: true },
 
});

module.exports = mongoose.model('Board', boardSchema);

