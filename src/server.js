const app = require('./app');
const dbConnection = require('./services/mongoConnection');

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log('erro');
  }
  console.log(`Initiated at localhost:${process.env.PORT}`);
});

dbConnection();