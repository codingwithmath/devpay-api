const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  updatedTimes: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false
  }
});

module.exports = mongoose.model('Techs', TechSchema);