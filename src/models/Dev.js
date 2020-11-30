const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema ({  
  name: {
    type: String,
    required: true,
  },
  github_username: {
    type: String,
    required: true,
    immutable: true,
  },
  bio: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true,
  },
  techs: {
    type: [String],
    required: true
  }
});

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
module.exports = mongoose.model('Devs', DevSchema);