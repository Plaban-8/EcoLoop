const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Donation', donationSchema);
