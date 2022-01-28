const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
      categoryid: {
        type: String,
        required: true,
        unique: true,
      },
      category_type: {
        type: String,
        required: true,
      },
   
    });

  const Category = model('Category', categorySchema);
  
  module.exports = Category;
  
