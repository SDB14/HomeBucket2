const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    description: {
      type: String,
    },
    type: {
      type: String,
      enums: ["Accessories", "Appeliences", "Books", "Cosmetics", "Clothes", "Shoes", "Jelewely"],
      required: true,
    },
  },
  { timestamps: true }
);

categorySchema.virtual('id').get(function () {
  return this._id.toString();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
