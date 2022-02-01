const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const itemSchema = new Schema(
  {
    itemDesc: {
      type: String,
      required: true,
      maxlength: 280
    },
    categoryDesc: {
        type: String,
        required: true,
        maxlength: 280
      },
    username: {
      type: String,
      required: true
    },
    itemId: {
        type: String,
        required: true
      },
      image: {
        type: String,
      },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = itemSchema;
