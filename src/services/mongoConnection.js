const mongoose = require('mongoose');

const URI = 'mongodb://localhost:28017/nodeapi'

const mongoConnection = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("MongoDB is connected!")
  }).catch((err) => {
    throw err;
  });
}

module.exports = mongoConnection;