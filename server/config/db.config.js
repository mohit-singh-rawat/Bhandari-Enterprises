const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URI, connectionParams)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error(`Error connecting to the database: ${err}`);
  });
