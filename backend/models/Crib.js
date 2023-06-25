const mongoose = require('mongoose');

const cribSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Crib = mongoose.model('Crib', cribSchema);

module.exports = Crib;
