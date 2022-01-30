const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/homebucket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,  NOT NEEDED
//   useFindAndModify: false, NOT NEEDED
});

module.exports = mongoose.connection;
