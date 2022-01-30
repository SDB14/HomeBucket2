const { Schema } = require('mongoose');

const categorySchema = new Schema(
  {
    categoryId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
     
    },
    type: {
        type: String,
        required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = categorySchema;
