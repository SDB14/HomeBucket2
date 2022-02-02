const { Schema, model } = require('mongoose');
const { Item } = require('semantic-ui-react');
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
    price: {
      type: Number,
      required: true
    },
    qty: {
      type: Number,
      required: true
    },
      image: {//image path stored in vscode
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

const Item = model('Item', itemSchema);

module.exports = Item;
