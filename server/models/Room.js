const { Schema } = require('mongoose');
//const itemSchema = require('./Item');
//const dateFormat = require('../utils/dateFormat'); TO BE ADDED

const roomSchema = new Schema({
  roomName: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
  },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: timestamp => dateFormat(timestamp)
//   },

});

// roomSchema.virtual('itemCount').get(function() {
//     return this.items.length;
//   });
  

module.exports = roomSchema;
