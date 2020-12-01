const mongoose = require('mongoose');

const TechSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role:{
    junior: {type: mongoose.Schema.Types.Mixed},
    mid: {type: mongoose.Schema.Types.Mixed},
    senior: {type: mongoose.Schema.Types.Mixed},
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false
  }
});

module.exports = mongoose.model('Techs', TechSchema);