const { Schema, model } = require('mongoose');


const itemSchema = new Schema(
    {
      itemid: {
        type: String,
        required: true,
        unique: true,
      },
      cat_type: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
      },
      item_desc: {
        type: String,
        required: false,
      },
      item_img: {
        type: String,
      },
      price: {
        type: String,
        required: true,
      },
      reciept: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      createdAT: {
        type: String,
      },
    });

  const Item = model('Item', itemSchema);
  
  module.exports = Item;
  
